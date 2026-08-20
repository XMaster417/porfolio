import placeholderIcon from '../../assets/icons/placeholder_icon.svg'

const SkillCard = ({ skill }) => {
  const experienceLabel = `${skill.years} ${skill.years === 1 ? 'year' : 'years'}`

  return (
    <article className="skill-card">
      <div className="skill-card__icon">
        <img src={skill.icon || placeholderIcon} alt="${skill.name}" aria-hidden="true" />
      </div>

      <div className="skill-card__content">
        <h3>{skill.name}</h3>
        <p>
          {experienceLabel}
          <span className="skill-card__experience-suffix"> of experience</span>
        </p>
      </div>
    </article>
  )
}

export default SkillCard
