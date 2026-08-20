import { useState } from 'react'
import projects from '../data/projects'



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
