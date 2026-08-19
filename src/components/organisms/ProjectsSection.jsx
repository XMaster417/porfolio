import arrowIcon from '../../assets/icons/arrow_down_icon.svg'
import useProjectCarousel from '../../hooks/useProjectCarousel'
import SectionLabel from '../atoms/SectionLabel'
import ProjectCard from '../molecules/ProjectCard'

const ProjectsSection = () => {
  const {
    projects,
    activeProjectIndex,
    setActiveProjectIndex,
    showPreviousProject,
    showNextProject,
  } = useProjectCarousel()

  const getProjectPosition = (projectIndex) => {
    if (projectIndex === activeProjectIndex) return 'active'
    if (projects.length === 1) return 'hidden'

    if (projects.length === 2) {
      return projectIndex < activeProjectIndex ? 'previous' : 'next'
    }

    const previousIndex = (activeProjectIndex - 1 + projects.length) % projects.length
    const nextIndex = (activeProjectIndex + 1) % projects.length

    if (projectIndex === previousIndex) return 'previous'
    if (projectIndex === nextIndex) return 'next'

    return 'hidden'
  }

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-section__content">
        <SectionLabel id="projects-title" label="PROJECTS" centered showEndDot />

        <div className="projects-carousel" aria-roledescription="carousel">
          <button
            className="projects-carousel__button projects-carousel__button--previous"
            type="button"
            aria-label="Show previous project"
            onClick={showPreviousProject}
          >
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </button>

          <div className="projects-carousel__viewport" aria-live="polite">
            {projects.map((project, index) => {
              const position = getProjectPosition(index)

              return (
                <div
                  className={`projects-carousel__slide projects-carousel__slide--${position}`}
                  key={project.id}
                  aria-hidden={index !== activeProjectIndex}
                >
                  <ProjectCard project={project} isActive={index === activeProjectIndex} />
                </div>
              )
            })}
          </div>

          <button
            className="projects-carousel__button projects-carousel__button--next"
            type="button"
            aria-label="Show next project"
            onClick={showNextProject}
          >
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        <div className="projects-carousel__pagination" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              className={index === activeProjectIndex ? 'projects-carousel__dot projects-carousel__dot--active' : 'projects-carousel__dot'}
              type="button"
              key={project.id}
              aria-label={`Show ${project.title}`}
              aria-current={index === activeProjectIndex ? 'true' : undefined}
              onClick={() => setActiveProjectIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
