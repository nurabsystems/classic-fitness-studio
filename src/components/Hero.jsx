export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-900 border border-slate-800/80 my-4" 
      aria-labelledby="hero-heading"
    >
      {/* Background Media with Picture & Fallback */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="images/hero.webp" type="image/webp" />
          <img
            src="images/hero.jpg"
            alt="Athlete training in a modern fitness studio"
            className="w-full h-full object-cover opacity-40 scale-105 transform hover:scale-100 transition-transform duration-1000"
            width="1920"
            height="1080"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <header className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-6">
        <h1 
          id="hero-heading" 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
        >
          Train Smart. <span className="text-emerald-400">Live Strong.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
          Group classes, expert trainers, and flexible plans — everything you need to keep fit and feel stronger.
        </p>
        <div className="pt-4">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            View Membership Plans
          </a>
        </div>
      </header>
    </section>
  )
}