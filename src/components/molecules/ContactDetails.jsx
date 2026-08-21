import locationIcon from '../../assets/icons/location_icon.svg'
import mailIcon from '../../assets/icons/mail_icon.svg'
import timeIcon from '../../assets/icons/time_icon.svg'
import ContactDetail from '../atoms/ContactDetail'
import SocialLinks from './SocialLinks'

const ContactDetails = () => {
  return (
    <aside className="contact-details" aria-label="Contact information">
      <div className="contact-details__primary">
        <h3>Let's build something <span>amazing</span> together.</h3>

        <ContactDetail
          icon={mailIcon}
          label="Email"
          value="yaelcharles417@gmail.com"
          href="mailto:yaelcharles417@gmail.com"
        />
        <ContactDetail
          icon={locationIcon}
          label="Location"
          value="Querétaro, México"
        />
        <ContactDetail
          icon={timeIcon}
          label="Response time"
          value="Within 24 hours"
        />
      </div>

      <div className="contact-details__socials">
        <p>Find me online</p>
        <SocialLinks />
      </div>
    </aside>
  )
}

export default ContactDetails
