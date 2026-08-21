import FieldError from './FieldError'

const ContactField = ({
  errors,
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
  const errorId = `${id}-error`
  const hasErrors = errors?.length > 0

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
        autoComplete={name === 'name' ? 'name' : name === 'contactEmail' ? 'email' : undefined}
        aria-describedby={hasErrors ? errorId : undefined}
        aria-invalid={hasErrors}
        required
      />
      <FieldError id={errorId} errors={errors} />
    </div>
  )
}

export default ContactField
