export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col gap-2">
          <p className="text-white font-bold text-xl tracking-tight">
            Classic Fitness Studio
          </p>
          <p className="text-slate-300 text-sm font-normal">
            Train Smart. Live Strong.
          </p>
        </div>

        {/* Footer Navigation */}
        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-medium">
            <li>
              <a
                href="#hero"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="#trainers"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Trainers
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-slate-500 border-t border-slate-900 pt-8 w-full max-w-2xl">
          &copy; {new Date().getFullYear()} Pulse Fitness website — Built for
          Mayerfeld Practicum
        </p>
      </div>
    </footer>
  );
}
