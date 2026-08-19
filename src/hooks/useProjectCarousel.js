import { useState } from 'react'

const projects = [
  {
    id: 'tochan-rchq',
    title: 'Tochan - RCHQ',
    startDate: 'Sep 2026',
    endDate: 'Oct 2026',
    technologies: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    details: [
      'Developed a system for a network of foster homes to centralize staff information.',
      'Implemented absence and events modules.',
      'Reduced the time spent consulting information from days to less than 4 minutes.',
    ],
    githubUrl: 'https://github.com/your-username/your-repository',
  },
  {
    id: 'workcells',
    title: 'WorkCells',
    startDate: 'Feb 2026',
    endDate: 'Jun 2026',
    technologies: ['Node.js', 'Express', 'EJS', 'SQL'],
    details: [
      'Developed a system to centralize employee sessions, absence requests and internal administrative workflows.',
      'Allowed managers to approve or reject employee requests according to their permissions.',
      'Included dashboards to support data-driven decision-making.',
    ],
    githubUrl: 'https://github.com/your-username/your-repository',
  },
]

const useProjectCarousel = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) => (
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    ))
  }

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) => (
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    ))
  }

  return {
    projects,
    activeProjectIndex,
    showPreviousProject,
    showNextProject,
  }
}

export default useProjectCarousel
