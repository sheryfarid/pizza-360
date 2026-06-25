import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({ cartCount, onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Deals', path: '/deals' },
    { name: 'Contact', path: '/contact' },
  ]

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 ${
      isActive
        ? 'text-white after:w-full'
        : 'text-white/80 hover:text-white after:w-0 hover:after:w-full'
    }`

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
            <span className="text-primary font-extrabold text-lg">360</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Pizza 360</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink key={link.name} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative bg-white text-primary px-4 py-2 rounded-full font-semibold text-sm
                       hover:bg-gray-100 transition-all duration-200 flex items-center gap-2
                       active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5
                             rounded-full flex items-center justify-center font-bold
                             animate-bounce-in">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary-dark/95 backdrop-blur-sm px-4 sm:px-6 pb-4 border-t border-white/10">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 text-sm font-medium transition-colors border-b border-white/5 last:border-0 ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
