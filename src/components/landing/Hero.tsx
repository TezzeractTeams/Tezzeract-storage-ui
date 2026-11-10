export default function Hero() {
  return (
    <section className="px-6 py-24 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl">
        Your files, stored simply.
        <br />
        Pay only for what you use.
      </h1>
      <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">
        No subscriptions. No tiers you don&apos;t need. Tezzeract Storage
        charges you for the space you actually fill — nothing more.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href="#get-started"
          className="rounded-full bg-white text-black px-6 py-3 font-medium"
        >
          Get started free
        </a>
        <a href="#pricing" className="px-6 py-3 font-medium opacity-80">
          See pricing
        </a>
      </div>
    </section>
  );
}
