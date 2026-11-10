export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 text-center">
      <h2 className="text-2xl font-semibold">Simple, pay-as-you-go pricing</h2>
      <p className="mt-3 opacity-70 max-w-md mx-auto">
        No plans, no tiers, no commitment. You only pay for the storage you
        actually use, billed monthly.
      </p>
      <div className="mt-10 mx-auto max-w-sm rounded-2xl border border-white/15 p-8">
        <p className="text-4xl font-bold">
          $0.0X <span className="text-base font-normal opacity-60">/ GB / month</span>
        </p>
        <p className="mt-2 text-sm opacity-70">
          {/* TODO: confirm real per-GB rate */}
          No minimums. No subscription. Cancel anytime — there&apos;s nothing to cancel.
        </p>
        <a
          href="#get-started"
          className="mt-6 inline-block rounded-full bg-white text-black px-6 py-3 font-medium"
        >
          Start storing files
        </a>
      </div>
    </section>
  );
}
