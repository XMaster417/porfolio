const TechnologyList = ({ technologies, className = '' }) => {
  if (!technologies?.length) return null

  return (
    <div
      className={`technology-list${className ? ` ${className}` : ''}`}
      aria-label="Technologies"
    >
      {technologies.map((technology) => (
        <span key={technology}>{technology}</span>
      ))}
    </div>
  )
}

export default TechnologyList
