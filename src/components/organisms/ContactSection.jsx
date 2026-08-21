import useContactForm from '../../hooks/useContactForm'
import SectionLabel from '../atoms/SectionLabel'
import ContactDetails from '../molecules/ContactDetails'
import ContactForm from '../molecules/ContactForm'
import Snackbar from '../molecules/Snackbar'

const ContactSection = () => {
  const contactForm = useContactForm()

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-section__content">
        <SectionLabel id="contact-title" label="CONTACT ME" centered showEndDot />

        <div className="contact-section__card">
          <ContactForm
            fieldErrors={contactForm.fieldErrors}
            isSubmitting={contactForm.isSubmitting}
            submission={contactForm.submission}
            onChange={contactForm.handleContactChange}
            onFieldBlur={contactForm.validateContactField}
            onSubmit={contactForm.submitContactForm}
          />
          <ContactDetails />
        </div>
      </div>
      <Snackbar
        message={contactForm.submission.status === 'success' ? contactForm.submission.message : ''}
        onClose={contactForm.clearSubmission}
      />
    </section>
  )
}

export default ContactSection
