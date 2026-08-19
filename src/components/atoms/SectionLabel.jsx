const SectionLabel = ({ id, label, centered = false, showEndDot = false }) => {
  const className = `section-label${centered ? ' section-label--centered' : ''}`

  return (
    <p id={id} className={className}>
      <span className="section-label__dot" aria-hidden="true" />
      <span>{label}</span>
      {showEndDot && <span className="section-label__dot" aria-hidden="true" />}
    </p>
  )
}

export default SectionLabel
