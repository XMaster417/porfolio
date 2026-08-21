import useExperienceTimeline from '../../hooks/useExperienceTimeline'
import SectionLabel from '../atoms/SectionLabel'
import ExperienceCard from '../molecules/ExperienceCard'

const ExperienceSection = () => {
  const { experiences, isExpanded, toggleExperience } = useExperienceTimeline()

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-section__content">
        <SectionLabel id="experience-title" label="EXPERIENCE" centered showEndDot />

        <div className="experience-timeline">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isExpanded={isExpanded(experience.id)}
              onToggle={() => toggleExperience(experience.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
