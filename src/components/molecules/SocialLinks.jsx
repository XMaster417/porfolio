import githubIcon from '../../assets/icons/github_icon.svg'
import linkedinIcon from '../../assets/icons/linkedin_icon.svg'
import SocialLink from '../atoms/SocialLink'

const socialLinks = [
  { href: 'https://github.com/XMaster417', icon: githubIcon, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/yael-charles', icon: linkedinIcon, label: 'LinkedIn' },
]

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`social-links ${className}`.trim()} aria-label="Redes profesionales">
      {socialLinks.map((socialLink) => <SocialLink key={socialLink.label} {...socialLink} />)}
    </div>
  )
}

export default SocialLinks
