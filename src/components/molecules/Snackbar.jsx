const Snackbar = ({ message, onClose }) => {
  if (!message) return null

  return (
    <div className="snackbar" role="status" aria-live="polite">
      <span>{message}</span>
      <button type="button" onClick={onClose} aria-label="Close notification">&times;</button>
    </div>
  )
}

export default Snackbar
