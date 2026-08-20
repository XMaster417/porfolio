import dateIcon from '../../assets/icons/date_icon.svg'
import githubIcon from '../../assets/icons/github_icon.svg'
import projectIcon from '../../assets/icons/project_icon.svg'
import useProjectCardOverflow from '../../hooks/useProjectCardOverflow'
import TechnologyList from '../atoms/TechnologyList'

const ProjectCard = ({ project, isActive }) => {
  const { cardRef, isScrollable } = useProjectCardOverflow(project)

  return (
    <article
      ref={cardRef}
      className={`project-card${isScrollable ? ' project-card--scrollable' : ''}`}
    >
      <header className="project-card__header">
        <div className="project-card__icon" aria-hidden="true">
          <img src={projectIcon} alt="" />
        </div>

        <div className="project-card__identity">
          <h3>{project.title}</h3>
          <div className="project-card__dates">
            <p>
              <img src={dateIcon} alt="" aria-hidden="true" />
              <span>Start</span> {project.startDate}
            </p>
            <p>
              <img src={dateIcon} alt="" aria-hidden="true" />
              <span>End</span> {project.endDate}
            </p>
          </div>
        </div>
      </header>

      <TechnologyList technologies={project.technologies} className="project-card__technologies" />

      <ul className="project-card__details">
        {project.details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>

      {project.githubUrl && (
        <a
          className="project-card__github"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          tabIndex={isActive ? 0 : -1}
        >
          <img src={githubIcon} alt="" aria-hidden="true" />
          <span>GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  )
}

export default ProjectCard
