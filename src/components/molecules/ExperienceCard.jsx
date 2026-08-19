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
    <article className={`experience-card${isExpanded ? ' experience-card--expanded' : ''}`}>
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
        </div>

        <ExperienceToggle isExpanded={isExpanded} title={experience.title} onClick={onToggle} />
      </div>

      {isExpanded && <ExperienceDetails {...experience} />}
    </article>
  )
}

export default ExperienceCard
