import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for the field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    // Successful validation -> show thank you view
    setIsSubmitted(true)
  }

  const handleReset = (e) => {
    e.preventDefault()
    setFormData({ name: '', email: '', plan: '', message: '' })
    setErrors({})
    setIsSubmitted(false)
  }

  return (
    <section id="contact" className="py-16 sm:py-24" aria-labelledby="contact-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isSubmitted ? (
          /* Thank-you View */
          <div
            id="thank-you"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center shadow-2xl flex flex-col items-center gap-6"
            role="status"
            aria-live="polite"
            tabIndex="-1"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 shadow-inner" aria-hidden="true">
              <svg
                width="40"
                height="40"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  d="M20 33 L28 41 L44 24"
                  stroke="currentColor"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Thank you!</h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-md">
              We've received your message. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all cursor-pointer mt-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* Form View */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <header className="text-center mb-10">
              <h2 id="contact-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Get in Touch
              </h2>
              <p className="text-slate-300 text-base">
                Questions about membership? Send us a message.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                  Full Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                  }`}
                />
                {errors.name && <span className="text-red-400 text-xs font-medium">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                  Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                  }`}
                />
                {errors.email && <span className="text-red-400 text-xs font-medium">{errors.email}</span>}
              </div>

              {/* Interested Plan */}
              <div className="flex flex-col gap-2">
                <label htmlFor="plan" className="text-sm font-semibold text-slate-200">
                  Interested Plan
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer"
                >
                  <option value="">Select a plan</option>
                  <option value="basic">Basic — €29/month</option>
                  <option value="standard">Standard — €49/month</option>
                  <option value="premium">Premium — €79/month</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  )
}