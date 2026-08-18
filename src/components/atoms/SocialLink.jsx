function SocialLink({ href, icon, label }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={`Visitar mi perfil de ${label}`}>
      <img src={icon} alt={label} aria-hidden="true" />
      <span>{label}</span>
    </a>
  )
}

export default SocialLink
