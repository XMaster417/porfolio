const ContactDetail = ({ icon, label, value, href }) => {
  const content = (
    <>
      <span className="contact-detail__icon">
        <img src={icon} alt="" aria-hidden="true" />
      </span>
      <span>
        <strong>{label}</strong>
        <small>{value}</small>
      </span>
    </>
  )

  return href ? (
    <a className="contact-detail" href={href}>{content}</a>
  ) : (
    <div className="contact-detail">{content}</div>
  )
}

export default ContactDetail
