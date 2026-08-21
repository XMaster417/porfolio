import useContactForm from '../../hooks/useContactForm'
import SectionLabel from '../atoms/SectionLabel'
import ContactDetails from '../molecules/ContactDetails'
import ContactForm from '../molecules/ContactForm'

const ContactSection = () => {
  const contactForm = useContactForm()

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-section__content">
        <SectionLabel id="contact-title" label="CONTACT ME" centered showEndDot />

        <div className="contact-section__card">
          <ContactForm
            isSubmitting={contactForm.isSubmitting}
            submission={contactForm.submission}
            onChange={contactForm.clearSubmission}
            onSubmit={contactForm.submitContactForm}
          />
          <ContactDetails />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
