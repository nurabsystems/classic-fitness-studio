import { RatingStars } from './RatingStars'

export function TrainerCard({ trainer, rating, onRate }) {
  const currentRating = rating !== undefined ? rating : trainer.rating

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300">
      {/* Trainer Image & Rating Badge */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={trainer.image}
          alt={`${trainer.name}, ${trainer.specialty} instructor`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          width="300"
          height="300"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5 shadow-lg">
          <span className="text-amber-400 text-sm">★</span>
          <span className="text-white text-xs font-bold">{currentRating.toFixed(1)}</span>
        </div>
      </div>

      {/* Trainer Info */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
          <p className="inline-block bg-emerald-500/10 text-emerald-400 font-semibold text-xs px-3 py-1 rounded-full border border-emerald-500/20 mb-3">
            {trainer.specialty}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {trainer.bio}
          </p>
        </div>

        {/* Rating Interactive Area */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Rate Trainer:</span>
          <RatingStars 
            value={currentRating} 
            onChange={(value) => onRate(trainer.id, value)} 
          />
        </div>
      </div>
    </article>
  )
}