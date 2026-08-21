const formatDate = (date) => new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
}).format(date instanceof Date ? date : new Date(`${date}T00:00:00Z`))

export default formatDate
