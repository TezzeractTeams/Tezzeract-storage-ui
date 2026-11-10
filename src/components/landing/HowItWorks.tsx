const steps = [
  {
    step: "1",
    title: "Sign up in seconds",
    description: "No credit card required to start. Create an account and you're in.",
  },
  {
    step: "2",
    title: "Upload your files",
    description: "Drag and drop from your browser, desktop app, or mobile device.",
  },
  {
    step: "3",
    title: "Pay for what you use",
    description: "We track your usage and bill you only for the storage you fill, each month.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-2xl font-semibold text-center">How it works</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto text-center">
        {steps.map((item) => (
          <div key={item.step}>
            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm">
              {item.step}
            </div>
            <h3 className="mt-4 font-medium">{item.title}</h3>
            <p className="mt-2 text-sm opacity-70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
