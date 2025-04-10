export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-black font-extrabold text-4xl sm:text-5xl leading-tight">
          Hi, Welcome to Peer Media LLC.
        </h1>
        <p>We&apos;re currently under maintenance, but we&apos;ll be right back soon.</p>
        <p>Stay tuned for a much cooler website experience coming your way!</p>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
