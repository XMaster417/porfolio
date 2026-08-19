import { useState } from 'react'

const experiences = [
  {
    id: 'itm',
    type: 'Academic',
    title: 'Instituto Tecnológico de Monterrey Campus Querétaro',
    startDate: '2023-08-01',
    endDate: '2027-06-05',
    location: 'Querétaro, México',
    details: [
      'B.S. in Computer Science student focused on creating impactful digital solutions.',
      'Developing knowledge in software engineering, web development, networks and artificial intelligence.',
    ],
  },
  {
    id: 'arcadian-support',
    type: 'Work Experience',
    title: 'Arcadian Support Internship',
    startDate: '2025-09-01',
    endDate: '2025-10-01',
    location: 'Querétaro, México',
    details: [
      'Creation of the logical network design with a star topology using Cisco Packet Tracer.',
      'Installation of network nodes for terminal equipment and security cameras.',
      'Preparation and installation of hardware devices such as routers, switches, wires and patch panels.',
    ],
    technologies: ['Cisco Packet Tracer', 'Network Design', 'Hardware Installation'],
  },
]

const formatDate = (date) => new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
}).format(date instanceof Date ? date : new Date(`${date}T00:00:00Z`))

const formatPeriod = ({ startDate, endDate }) => {
  if (!startDate && !endDate) return null
  if (!startDate) return formatDate(endDate)

  return `${formatDate(startDate)} – ${formatDate(endDate ?? new Date())}`
}

const isCurrentlyEnrolled = ({ startDate, endDate }) => {
  if (!startDate) return false
  if (!endDate) return true

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return new Date(`${endDate}T00:00:00`).getTime() >= today.getTime()
}

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
