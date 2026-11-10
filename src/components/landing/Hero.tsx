export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium opacity-80">
            Pay-as-you-go · No subscription
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Your files, stored simply.
            <br />
            Pay only for what you use.
          </h1>

          <p className="mt-5 max-w-lg text-lg opacity-70">
            No subscriptions. No tiers you don&apos;t need. Tezzeract Storage
            charges you for the space you actually fill — nothing more.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition-opacity hover:opacity-90"
            >
              Get started free
            </a>
            <a
              href="#pricing"
              className="px-6 py-3 font-medium opacity-80 transition-opacity hover:opacity-100"
            >
              See pricing →
            </a>
          </div>

          <p className="mt-6 text-sm opacity-50">
            No credit card required · Cancel anytime, there&apos;s nothing to cancel
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium opacity-80">Your storage</span>
              <span className="text-sm opacity-50">42.3 GB used</span>
            </div>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[38%] rounded-full bg-emerald-400" />
            </div>

            <div className="mt-6 space-y-3">
              {[
                { name: "Project-brief.pdf", size: "2.1 MB" },
                { name: "Team-photos/", size: "8.4 GB" },
                { name: "backup-2024.zip", size: "16.7 GB" },
              ].map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm"
                >
                  <span className="opacity-90">{file.name}</span>
                  <span className="opacity-50">{file.size}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-center text-sm text-emerald-300">
              This month&apos;s bill: $3.81
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
