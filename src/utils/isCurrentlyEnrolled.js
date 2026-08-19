const isCurrentlyEnrolled = ({ startDate, endDate }) => {
  if (!startDate) return false
  if (!endDate) return true

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return new Date(`${endDate}T00:00:00`).getTime() >= today.getTime()
}

export default isCurrentlyEnrolled
