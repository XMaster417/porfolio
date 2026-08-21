import { useState } from 'react'
import experiences from '../data/experiences'
import formatPeriod from '../utils/formatPeriod'
import isCurrentlyEnrolled from '../utils/isCurrentlyEnrolled'

const useExperienceTimeline = () => {
  const [expandedExperienceIds, setExpandedExperienceIds] = useState([])

  const timelineExperiences = experiences.map((experience) => ({
    ...experience,
    isCurrent: isCurrentlyEnrolled(experience),
    period: formatPeriod(experience),
  }))

  const toggleExperience = (experienceId) => {
    setExpandedExperienceIds((expandedIds) => (
      expandedIds.includes(experienceId)
        ? expandedIds.filter((id) => id !== experienceId)
        : [...expandedIds, experienceId]
    ))
  }

  return {
    experiences: timelineExperiences,
    isExpanded: (experienceId) => expandedExperienceIds.includes(experienceId),
    toggleExperience,
  }
}

export default useExperienceTimeline
