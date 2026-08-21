import mailIcon from '../../assets/icons/mail_icon.svg'
import messageIcon from '../../assets/icons/message_icon.svg'
import ContactField from '../atoms/ContactField'

const ContactForm = ({
  isSubmitting,
  submission,
  onChange,
  onSubmit,
}) => {
  return (
    <form className="contact-form" onSubmit={onSubmit} onChange={onChange}>
      <input className="contact-form__botcheck" type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" />

      <ContactField
        id="contact-name"
        icon={messageIcon}
        label="Full name"
        minLength={3}
        maxLength={100}
        name="name"
        placeholder="Yael Charles Marin"
      />
      <ContactField
        id="contact-email"
        icon={mailIcon}
        label="Your E-mail"
        minLength={3}
        maxLength={100}
        name="email"
        placeholder="john_doe@gmail.com"
        type="email"
      />
      <ContactField
        id="contact-message"
        icon={messageIcon}
        label="Type the Message"
        minLength={10}
        maxLength={500}
        name="message"
        placeholder="Hello, I would like to collaborate with you :)"
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
        {submission.message}
      </p>
    </form>
  )
}

export default ContactForm
