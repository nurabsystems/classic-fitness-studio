import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Pulse Fitness home">
          <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="transition-transform group-hover:scale-105">
            <rect width="32" height="32" rx="8" fill="#00E676" />
            <path
              d="M8 16 L12 16 L14 10 L18 22 L20 16 L24 16"
              stroke="#0D1117"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold text-lg tracking-tight text-white">Classic Fitness Studio</span>
        </a>

        {/* React-controlled Hamburger / Close Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none cursor-pointer rounded-lg hover:bg-slate-900 transition-colors"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={`w-6 h-0.5 bg-slate-200 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-slate-200 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-6 h-0.5 bg-slate-200 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Navigation List / Panel */}
        <ul 
          id="nav" 
          className={`fixed md:static inset-x-0 top-20 bg-slate-950/95 md:bg-transparent border-b border-slate-800 md:border-none shadow-2xl md:shadow-none flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-8 py-8 md:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'flex opacity-100 translate-y-0' : 'hidden md:flex opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0'
          }`}
        >
          <li>
            <a href="#hero" onClick={closeMenu} className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-lg md:text-sm">Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-lg md:text-sm">About</a>
          </li>
          <li>
            <a href="#classes" onClick={closeMenu} className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-lg md:text-sm">Classes</a>
          </li>
          <li>
            <a href="#trainers" onClick={closeMenu} className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-lg md:text-sm">Trainers</a>
          </li>
          <li>
            <a href="#pricing" onClick={closeMenu} className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-lg md:text-sm">Pricing</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-lg md:text-sm">Contact</a>
          </li>

          {/* Close button for mobile drawer */}
          <li className="md:hidden mt-2">
            <button 
              onClick={closeMenu} 
              className="text-slate-400 hover:text-white text-sm font-semibold border border-slate-700 px-6 py-2 rounded-lg cursor-pointer transition-colors"
            >
              Close
            </button>
          </li>

          {/* Settings Menu Dropdown */}
          <details className="relative settings-menu group">
            <summary className="list-none cursor-pointer flex items-center justify-center p-2 rounded-full hover:bg-slate-900 text-slate-300 hover:text-emerald-400 transition-colors" aria-label="Settings">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                />
              </svg>
            </summary>
            <div className="absolute right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 mt-3 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-4 z-50 text-left text-sm settings-panel">
              <h4 className="font-semibold text-white mb-3 border-b border-slate-800 pb-2">Settings</h4>
              <div className="settings-group mb-3">
                <p className="settings-label text-xs text-slate-400 uppercase tracking-wider mb-1">Theme</p>
                <p className="settings-value flex items-center justify-between text-slate-200 font-medium">
                  Dark <span className="settings-badge bg-emerald-500/10 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-semibold">Default</span>
                </p>
                <p className="settings-note text-xs text-slate-500 mt-0.5">Light theme coming in v2</p>
              </div>
              <div className="settings-group">
                <p className="settings-label text-xs text-slate-400 uppercase tracking-wider mb-1">Motion</p>
                <p className="settings-value text-slate-200 font-medium">Respects system preference</p>
              </div>
            </div>
          </details>
        </ul>
      </nav>
    </header>
  )
}