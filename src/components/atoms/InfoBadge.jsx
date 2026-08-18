const InfoBadge = ({ icon, label, className = '' }) => {
  return (
    <div className={`info-badge ${className}`}>
      <img src={icon} alt={label} aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

export default InfoBadge
