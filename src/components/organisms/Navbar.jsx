import { useState } from 'react'
import NavLink from '../atoms/NavLink'

const navigationItems = [
  { href: '#home', label: 'Home' },
  { href: '#about-me', label: 'About Me' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home" aria-label="Ir al inicio" onClick={closeMenu}>
        XMaster417<span>.</span>
      </a>

      <button
        className={`navbar__menu-button${isMenuOpen ? ' navbar__menu-button--open' : ''}`}
        type="button"
        aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav 
        id="primary-navigation" 
        className={
          `navbar__navigation${isMenuOpen ? ' navbar__navigation--open' : ''}`
        } 
        aria-label="Navegación principal"
      >
        {navigationItems.map((item) => (
          <NavLink 
            key={item.href} {...item} 
            isActive={item.href === '#home'} 
            onClick={closeMenu} 
          />
        ))}
      </nav>
    </header>
  )
}

export default Navbar
