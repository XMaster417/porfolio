import formatDate from './formatDate'

const formatPeriod = ({ startDate, endDate }) => {
  if (!startDate && !endDate) return null
  if (!startDate) return formatDate(endDate)

  return `${formatDate(startDate)} – ${formatDate(endDate ?? new Date())}`
}

export default formatPeriod
