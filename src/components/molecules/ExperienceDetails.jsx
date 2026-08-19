const ExperienceDetails = ({ details }) => {
  return (
    <div className="experience-details">
      <ul>
        {details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
    </div>
  )
}

export default ExperienceDetails
