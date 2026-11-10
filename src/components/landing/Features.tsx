const features = [
  {
    title: "Pay-as-you-go pricing",
    description:
      "No monthly plans to pick between. You're billed for exactly the storage you use, down to the gigabyte.",
  },
  {
    title: "Effortless sharing",
    description:
      "Send a link, set permissions, done. Share a single file or a whole folder with anyone, instantly.",
  },
  {
    title: "Sync across devices",
    description:
      "Your files stay up to date on every device automatically, so you're never searching for the latest version.",
  },
  {
    title: "Built-in security",
    description:
      "Every file is encrypted in transit and at rest. You control who sees what, and can revoke access anytime.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-16">
      <h2 className="text-2xl font-semibold text-center">
        Everything you need, nothing you don&apos;t
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title}>
            <h3 className="font-medium">{feature.title}</h3>
            <p className="mt-2 text-sm opacity-70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
