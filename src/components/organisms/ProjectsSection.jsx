import arrowIcon from '../../assets/icons/arrow_down_icon.svg'
import useProjectCarousel from '../../hooks/useProjectCarousel'
import SectionLabel from '../atoms/SectionLabel'
import ProjectCard from '../molecules/ProjectCard'

const ProjectsSection = () => {
  const {
    projects,
    activeProjectIndex,
    showPreviousProject,
    showNextProject,
    startProjectSwipe,
    endProjectSwipe,
    startProjectTouchSwipe,
    endProjectTouchSwipe,
    cancelProjectSwipe,
    preventSwipeClick,
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

          <div
            className="projects-carousel__viewport"
            aria-live="polite"
            onPointerDown={startProjectSwipe}
            onPointerUp={endProjectSwipe}
            onPointerCancel={cancelProjectSwipe}
            onTouchStart={startProjectTouchSwipe}
            onTouchEnd={endProjectTouchSwipe}
            onTouchCancel={cancelProjectSwipe}
            onClickCapture={preventSwipeClick}
          >
            {projects.map((project, index) => {
              const position = getProjectPosition(index)

              return (
                <div
                  className={`projects-carousel__slide projects-carousel__slide--${position}`}
                  key={`${project.id}-${index}`}
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

        <div
          className="projects-carousel__progress"
          role="group"
          aria-label="Project carousel position"
        >
          {projects.map((project, index) => {
            const state = index === activeProjectIndex
              ? 'active'
              : index === activeProjectIndex - 1
                ? 'previous'
                : index === activeProjectIndex + 1
                  ? 'next'
                  : 'inactive'

            return (
              <span
                className={`projects-carousel__progress-segment projects-carousel__progress-segment--${state}`}
                key={`${project.id}-${index}`}
                aria-hidden="true"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
