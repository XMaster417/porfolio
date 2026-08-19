import academicIcon from '../../assets/icons/academic_icon.svg'
import workIcon from '../../assets/icons/work_icon.svg'
import ExperienceToggle from '../atoms/ExperienceToggle'
import ExperienceDetails from './ExperienceDetails'

const experienceIcons = {
  Academic: academicIcon,
  'Work Experience': workIcon,
}

const ExperienceCard = ({ experience, isExpanded, onToggle }) => {
  const experienceIcon = experienceIcons[experience.type]

  return (
    <article className={`experience-card experience-card--${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="experience-card__node" aria-hidden="true" />

      <div className="experience-card__summary">
        <div className="experience-card__identity">
          <div className="experience-card__icon">
            <img src={experienceIcon} alt="" aria-hidden="true" />
          </div>
          <div>
            <p className="experience-card__type">{experience.type}</p>
            <h3>{experience.title}</h3>
          </div>
        </div>

        <div className="experience-card__meta">
          <p>{experience.period}</p>
          {experience.isCurrent && <span>Currently enrolled</span>}
          <p className="experience-card__location">{experience.location}</p>
        </div>

        <ExperienceToggle isExpanded={isExpanded} title={experience.title} onClick={onToggle} />
      </div>

      {experience.technologies?.length > 0 && (
        <div className="experience-card__technologies" aria-label="Tecnologías y habilidades">
          {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      )}

      <div
        className={`experience-card__details${isExpanded ? ' experience-card__details--expanded' : ''}`}
        aria-hidden={!isExpanded}
      >
        <ExperienceDetails details={experience.details} />
      </div>
    </article>
  )
}

export default ExperienceCard
