export function About() {
  return (
    <section id="about" className="py-16 sm:py-24" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-6">
            <figure className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-800 bg-slate-900 group">
              <img
                src="images/about-studio.jpg"
                alt="Bright modern fitness studio with training equipment"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-[4/5]"
                width="800"
                height="1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </figure>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div>
              <p className="inline-block text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                About the studio
              </p>
              <h2 
                id="about-heading" 
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
              >
                Built for people who want to{' '}
                <span className="text-emerald-400">train smarter</span>.
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Pulse Fitness opened with a simple idea — fitness should feel welcoming, not intimidating. Whether you're training for your first 5K or chasing a new personal best, our studio gives you the space, coaching, and community to get there.
            </p>

            <ul className="flex flex-col gap-4 text-slate-300">
              <li className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span>
                  <strong className="text-white font-semibold">Expert coaches</strong> — certified in HIIT, strength, yoga, and mobility
                </span>
              </li>
              <li className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span>
                  <strong className="text-white font-semibold">Small classes</strong> — personalized attention, every session
                </span>
              </li>
              <li className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                <span>
                  <strong className="text-white font-semibold">Flexible plans</strong> — start, pause, or cancel anytime
                </span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                See Membership Plans
              </a>
              <a
                href="#classes"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all hover:border-slate-600 cursor-pointer"
              >
                View Class Schedule
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}