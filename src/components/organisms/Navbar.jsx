import { useEffect, useState } from 'react'
import NavLink from '../atoms/NavLink'

const navigationItems = [
  { href: '#home', label: 'Home' },
  { href: '#about-me', label: 'About Me' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(() => {
    const currentHash = window.location.hash
    const isKnownSection = navigationItems.some(({ href }) => href === currentHash)

    return isKnownSection ? currentHash : '#home'
  })

  const closeMenu = () => setIsMenuOpen(false)

  const updateActiveSection = () => {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight ?? 0
    const sectionOffset = navbarHeight + 8
    let nextActiveSection = '#home'

    navigationItems.forEach(({ href }) => {
      const section = document.querySelector(href)

      if (section && section.getBoundingClientRect().top <= sectionOffset) {
        nextActiveSection = href
      }
    })

    setActiveSection(nextActiveSection)
  }

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('hashchange', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [])

  const handleNavLinkClick = (href) => {
    setActiveSection(href)
    closeMenu()
  }

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home" aria-label="Ir al inicio" onClick={() => handleNavLinkClick('#home')}>
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
            isActive={item.href === activeSection} 
            onClick={() => handleNavLinkClick(item.href)} 
          />
        ))}
      </nav>
    </header>
  )
}

export default Navbar
