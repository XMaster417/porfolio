const ExperienceDetails = ({ location, details, technologies = [] }) => {
  return (
    <div className="experience-details">
      <p className="experience-details__location">{location}</p>

      {technologies.length > 0 && (
        <div className="experience-details__technologies" aria-label="Tecnologías y habilidades">
          {technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      )}

      <ul>
        {details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
    </div>
  )
}

export default ExperienceDetails
