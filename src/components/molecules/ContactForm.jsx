import mailIcon from '../../assets/icons/mail_icon.svg'
import messageIcon from '../../assets/icons/message_icon.svg'
import { contactFieldConstraints } from '../../schemas/contactSchema'
import ContactField from '../atoms/ContactField'

const ContactForm = ({
  fieldErrors,
  isSubmitting,
  submission,
  onChange,
  onFieldBlur,
  onSubmit,
}) => {
  return (
    <form className="contact-form" onSubmit={onSubmit} onChange={onChange} onBlur={onFieldBlur} noValidate>
      <input className="contact-form__botcheck" type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" />

      <ContactField
        errors={fieldErrors.name}
        id="contact-name"
        icon={messageIcon}
        label="Full name"
        minLength={contactFieldConstraints.name.minLength}
        maxLength={contactFieldConstraints.name.maxLength}
        name="name"
        placeholder="Yael Charles Marin"
      />
      <ContactField
        errors={fieldErrors.contactEmail}
        id="contact-email"
        icon={mailIcon}
        label="Your E-mail"
        minLength={contactFieldConstraints.contactEmail.minLength}
        maxLength={contactFieldConstraints.contactEmail.maxLength}
        name="contactEmail"
        placeholder="john_doe@gmail.com"
        type="email"
      />
      <ContactField
        errors={fieldErrors.message}
        id="contact-message"
        icon={messageIcon}
        label="Type the Message"
        minLength={contactFieldConstraints.message.minLength}
        maxLength={contactFieldConstraints.message.maxLength}
        name="message"
        placeholder="Hello, I would like to collaborate with you!"
        isTextArea
      />

      <button className="contact-form__submit" type="submit" disabled={isSubmitting}>
        <img src={mailIcon} alt="" aria-hidden="true" />
        <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
      </button>

      <p
        className={`contact-form__status contact-form__status--${submission.status}`}
        role="status"
        aria-live="polite"
      >
        {submission.status === 'success' ? '' : submission.message}
      </p>
    </form>
  )
}

export default ContactForm
