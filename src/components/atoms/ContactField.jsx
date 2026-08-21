const ContactField = ({
  id,
  icon,
  label,
  maxLength,
  minLength,
  name,
  placeholder,
  type = 'text',
  isTextArea = false,
}) => {
  const Field = isTextArea ? 'textarea' : 'input'

  return (
    <div className="contact-field">
      <label htmlFor={id}>
        <img src={icon} alt="" aria-hidden="true" />
        <span>{label}</span>
      </label>
      <Field
        id={id}
        name={name}
        type={isTextArea ? undefined : type}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        rows={isTextArea ? 6 : undefined}
        autoComplete={name === 'name' || name === 'email' ? name : undefined}
        required
      />
    </div>
  )
}

export default ContactField
