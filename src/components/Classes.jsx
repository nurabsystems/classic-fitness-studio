import { classes } from '../data/classes'

export function Classes() {
  return (
    <section id="classes" className="py-16 sm:py-24" aria-labelledby="classes-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 id="classes-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Class Schedule
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Weekly sessions led by certified instructors.
          </p>
        </header>

        {/* Schedule Table Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" aria-label="Class schedule table">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-emerald-400 uppercase text-xs tracking-wider">
                  <th scope="col" className="py-4 px-6 font-semibold">Day</th>
                  <th scope="col" className="py-4 px-6 font-semibold">Time</th>
                  <th scope="col" className="py-4 px-6 font-semibold">Class</th>
                  <th scope="col" className="py-4 px-6 font-semibold">Trainer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm sm:text-base text-slate-200">
                {classes.map((cls) => (
                  <tr key={cls.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-white" data-label="Day">
                      <span className="inline-block bg-slate-800 text-slate-200 px-3 py-1 rounded-full text-xs font-semibold border border-slate-700">
                        {cls.day}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-300 font-mono" data-label="Time">
                      {cls.time}
                    </td>
                    <td className="py-4 px-6 font-semibold text-emerald-400" data-label="Class">
                      {cls.name}
                    </td>
                    <td className="py-4 px-6 text-slate-300" data-label="Trainer">
                      {cls.trainer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}