import academicIcon from '../../assets/icons/academic_icon.svg'
import emailIcon from '../../assets/icons/email_icon.svg'
import githubIcon from '../../assets/icons/github_icon.svg'
import linkedinIcon from '../../assets/icons/linkedin_icon.svg'
import projectIcon from '../../assets/icons/project_icon.svg'
import skillsIcon from '../../assets/icons/skills_icon.svg'
import workIcon from '../../assets/icons/work_icon.svg'

const footerNavigation = [
  { href: '#home', label: 'Home', icon: projectIcon },
  { href: '#about-me', label: 'About me', icon: academicIcon },
  { href: '#experience', label: 'Experience', icon: workIcon },
  { href: '#projects', label: 'Projects', icon: projectIcon },
  { href: '#skills', label: 'Skills', icon: skillsIcon },
  { href: '#contact', label: 'Contact', icon: emailIcon },
]

const footerSocialLinks = [
  {
    href: 'https://www.linkedin.com/in/yael-charles',
    icon: linkedinIcon,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/XMaster417',
    icon: githubIcon,
    label: 'GitHub',
  },
  {
    href: 'mailto:yaelcharles417@gmail.com',
    icon: emailIcon,
    label: 'Email',
  },
]

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <section className="footer__identity" aria-labelledby="footer-name">
          <h2 id="footer-name">Yael Charles Marin</h2>
          <p className="footer__role">Software Engineer</p>

          <p className="footer__description">
            Computer Science student building software and intelligent solutions.
          </p>
        </section>

        <nav className="footer__navigation" aria-label="Footer navigation">
          <h2>Explore</h2>

          <ul>
            {footerNavigation.map(({ href, label, icon }) => (
              <li key={href}>
                <a href={href}>
                  <img src={icon} alt="" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer__contact" aria-labelledby="footer-contact-title">
          <h2 id="footer-contact-title">Let's connect</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>

          <div className="footer__socials">
            {footerSocialLinks.map(({ href, icon, label }) => {
              const isExternalLink = !href.startsWith('mailto:')

              return (
                <a
                  key={label}
                  href={href}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noreferrer' : undefined}
                  aria-label={isExternalLink ? `Visit my ${label} profile` : 'Send me an email'}
                >
                  <span className="footer__social-icon">
                    <img src={icon} alt="" aria-hidden="true" />
                  </span>
                  <span>{label}</span>
                </a>
              )
            })}
          </div>
        </section>
      </div>

      <div className="footer__bottom">
        <p><span aria-hidden="true">&lt;/&gt;</span> © 2026 Yael Charles Marin. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
