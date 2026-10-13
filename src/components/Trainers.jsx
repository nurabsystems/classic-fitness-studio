import { trainers } from '../data/trainers'
import { TrainerCard } from './TrainerCard'

export function Trainers({ ratings, onRate }) {
  return (
    <section id="trainers" className="py-16 sm:py-24" aria-labelledby="trainers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 id="trainers-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Meet Our Trainers
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Certified coaches who train with you, not just at you.
          </p>
        </header>

        {/* Trainer Grid (Mobile-first single column expanding to 2 and 3 columns on larger screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              rating={ratings[trainer.id]}
              onRate={onRate}
            />
          ))}
        </div>

      </div>
    </section>
  )
}