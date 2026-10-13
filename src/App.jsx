import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Classes } from './components/Classes'
import { Trainers } from './components/Trainers'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const [ratings, setRatings] = useState({})

  function handleRate(trainerId, value) {
    setRatings((prev) => ({
      ...prev,
      [trainerId]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      <Header />
      
      {/* Mobile-first single column grid expanding across sm, md, lg, and xl screen sizes with responsive padding & gaps */}
      <main className="grid grid-cols-1 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl gap-y-12 sm:gap-y-16 lg:gap-y-24 py-8 sm:py-12">
        <Hero />
        <About />
        <Classes />
        <Trainers ratings={ratings} onRate={handleRate} />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  )
} 