import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (use Redis in production for multiple instances)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

// Sanitize user input to prevent XSS in HTML emails
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validate string length
function isValidLength(str: string, min: number, max: number): boolean {
  return str.length >= min && str.length <= max;
}

interface QuoteRequest {
  name: string;
  email: string;
  service: string;
  message: string;
  honeypot?: string; // Hidden field - should always be empty
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting by IP
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || 
               request.headers.get("x-real-ip") || 
               "unknown";
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: QuoteRequest = await request.json();
    const { name, email, service, message, honeypot } = body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      // Silently accept but don't send email (don't reveal to bots)
      return NextResponse.json(
        { success: true, messageId: "ok" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (!isValidLength(name, 2, 100)) {
      return NextResponse.json(
        { error: "Name must be between 2 and 100 characters" },
        { status: 400 }
      );
    }

    if (!isValidLength(email, 5, 254)) {
      return NextResponse.json(
        { error: "Invalid email length" },
        { status: 400 }
      );
    }

    if (!isValidLength(message, 10, 5000)) {
      return NextResponse.json(
        { error: "Message must be between 10 and 5000 characters" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate service is a known value
    const validServices = ["web-development", "logo-design", "branding", "saas", "other"];
    if (!validServices.includes(service)) {
      return NextResponse.json(
        { error: "Invalid service selected" },
        { status: 400 }
      );
    }

    // Sanitize all user inputs for HTML email
    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(email);
    const safeMessage = sanitizeHtml(message);

    // Format service name for display
    const serviceNames: Record<string, string> = {
      "web-development": "Web Development",
      "logo-design": "Logo Design",
      "branding": "Branding Strategy",
      "saas": "SaaS Product Inquiry",
      "other": "Other",
    };
    const serviceName = serviceNames[service] || service;

    // Route emails to the right team member based on service type
    const techServices = ["web-development", "saas", "other"];
    const designServices = ["logo-design", "branding"];
    
    let recipientEmail: string;
    if (techServices.includes(service)) {
      recipientEmail = "mason.caird@peermedia.co";
    } else if (designServices.includes(service)) {
      recipientEmail = "krista.caird@peermedia.co";
    } else {
      recipientEmail = "support@peermedia.co"; // Fallback
    }

    // Send email to your team
    const { data, error } = await resend.emails.send({
      from: "quotes@peermedia.co", // Using Resend's test domain - change to your verified domain in production
      to: [recipientEmail],
      replyTo: email, // Use original email for reply-to
      subject: `New Quote Request: ${serviceName} - ${safeName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Quote Request</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 32px; border-radius: 16px 16px 0 0;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                          New Quote Request
                        </h1>
                        <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">
                          A new inquiry has been submitted via the website
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="background-color: #18181b; padding: 32px; border: 1px solid #27272a; border-top: none;">
                        <!-- Client Info -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                          <tr>
                            <td style="padding: 16px; background-color: #27272a; border-radius: 12px;">
                              <p style="margin: 0 0 4px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                                Client Name
                              </p>
                              <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 600;">
                                ${safeName}
                              </p>
                            </td>
                          </tr>
                        </table>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                          <tr>
                            <td style="padding: 16px; background-color: #27272a; border-radius: 12px;">
                              <p style="margin: 0 0 4px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                                Email Address
                              </p>
                              <a href="mailto:${safeEmail}" style="color: #3b82f6; font-size: 16px; text-decoration: none;">
                                ${safeEmail}
                              </a>
                            </td>
                          </tr>
                        </table>
                        
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                          <tr>
                            <td style="padding: 16px; background-color: #27272a; border-radius: 12px;">
                              <p style="margin: 0 0 4px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                                Service Requested
                              </p>
                              <p style="margin: 0; color: #3b82f6; font-size: 16px; font-weight: 600;">
                                ${serviceName}
                              </p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Message -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 16px; background-color: #27272a; border-radius: 12px;">
                              <p style="margin: 0 0 8px; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                                Project Details
                              </p>
                              <p style="margin: 0; color: #d4d4d8; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${safeMessage}
                              </p>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- CTA Button -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 32px;">
                          <tr>
                            <td align="center">
                              <a href="mailto:${safeEmail}?subject=Re: Your Quote Request - PeerMedia" 
                                 style="display: inline-block; padding: 14px 32px; background-color: #2563eb; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 12px;">
                                Reply to ${safeName}
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #18181b; padding: 24px 32px; border: 1px solid #27272a; border-top: none; border-radius: 0 0 16px 16px;">
                        <p style="margin: 0; color: #52525b; font-size: 12px; text-align: center;">
                          This email was sent from the PeerMedia website contact form.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    // Optionally send a confirmation email to the client
    await resend.emails.send({
      from: "PeerMedia <onboarding@resend.dev>", // Using Resend's test domain - change to your verified domain in production
      to: [email], // Use original email for sending
      subject: "We've received your quote request - PeerMedia",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Quote Request Received</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 32px; border-radius: 16px 16px 0 0; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                          PeerMedia
                        </h1>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="background-color: #18181b; padding: 40px 32px; border: 1px solid #27272a; border-top: none;">
                        <h2 style="margin: 0 0 16px; color: #ffffff; font-size: 24px; font-weight: 600;">
                          Thanks for reaching out, ${safeName}!
                        </h2>
                        <p style="margin: 0 0 24px; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                          We've received your quote request for <strong style="color: #3b82f6;">${serviceName}</strong> and we're excited to learn more about your project.
                        </p>
                        <p style="margin: 0 0 24px; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                          Our team will review your inquiry and get back to you within <strong style="color: #ffffff;">24 hours</strong>.
                        </p>
                        
                        <!-- What's Next Box -->
                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 32px 0;">
                          <tr>
                            <td style="padding: 20px; background-color: #27272a; border-radius: 12px; border-left: 4px solid #2563eb;">
                              <p style="margin: 0 0 8px; color: #ffffff; font-size: 14px; font-weight: 600;">
                                What happens next?
                              </p>
                              <ul style="margin: 0; padding-left: 20px; color: #a1a1aa; font-size: 14px; line-height: 1.8;">
                                <li>We'll review your project details</li>
                                <li>Prepare a customized proposal</li>
                                <li>Schedule a discovery call if needed</li>
                              </ul>
                            </td>
                          </tr>
                        </table>
                        
                        <p style="margin: 0; color: #71717a; font-size: 14px;">
                          In the meantime, feel free to explore more of our work at 
                          <a href="https://peermedia.co" style="color: #3b82f6; text-decoration: none;">peermedia.co</a>
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #18181b; padding: 24px 32px; border: 1px solid #27272a; border-top: none; border-radius: 0 0 16px 16px; text-align: center;">
                        <p style="margin: 0 0 8px; color: #52525b; font-size: 12px;">
                          © ${new Date().getFullYear()} PeerMedia LLC. All rights reserved.
                        </p>
                        <p style="margin: 0; color: #52525b; font-size: 12px;">
                          San Francisco, CA
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
