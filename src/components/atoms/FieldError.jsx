const FieldError = ({ id, errors = [] }) => {
  if (errors.length === 0) return null

  return (
    <ul id={id} className="field-error" aria-live="polite">
      {errors.map((error) => <li key={error}>{error}</li>)}
    </ul>
  )
}

export default FieldError
