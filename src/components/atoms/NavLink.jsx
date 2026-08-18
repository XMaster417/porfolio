const NavLink = ({ href, label, isActive, onClick }) => {
  return (
    <a 
      className={`nav-link${isActive ? ' nav-link--active' : ''}`} 
      href={href} 
      onClick={onClick}
    >
      {label}
    </a>
  )
}

export default NavLink
