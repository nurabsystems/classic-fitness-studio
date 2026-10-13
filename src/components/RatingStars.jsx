export function RatingStars({ value, onChange, max = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const star = i + 1
        const isActive = star <= Math.round(value)
        
        return (
          <button
            key={i}
            type="button"
            disabled={!onChange}
            onClick={() => onChange && onChange(star)}
            className={`text-lg transition-colors ${
              isActive ? 'text-amber-400' : 'text-slate-600'
            } ${onChange ? 'cursor-pointer hover:text-amber-300' : 'cursor-default'}`}
            aria-label={`Rate ${star} out of ${max} stars`}
          >
            ★
          </button>
        )
      })}
    </div>
  )
}