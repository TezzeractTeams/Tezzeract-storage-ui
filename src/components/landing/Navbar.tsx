export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <span className="font-semibold">Tezzeract Storage</span>
      <div className="flex items-center gap-6 text-sm opacity-80">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#get-started">Get started</a>
      </div>
    </nav>
  );
}
