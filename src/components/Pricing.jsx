import { pricing } from '../data/pricing'

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Membership Plans
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Simple pricing. Cancel anytime.
          </p>
        </header>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-slate-900 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 lg:-translate-y-2'
                  : 'bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                
                {/* Price */}
                <p className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">€{plan.price}</span>
                  <span className="text-slate-400 text-sm font-medium">/ month</span>
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8 text-slate-300 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`inline-flex items-center justify-center w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer ${
                  plan.featured
                    ? 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-emerald-500/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                Choose {plan.name}
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}