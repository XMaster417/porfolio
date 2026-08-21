import networkIcon from '../../assets/icons/computer_network_icon.svg'
import mobileIcon from '../../assets/icons/mobile_dev_icon.svg'
import skillsIcon from '../../assets/icons/skills_icon.svg'
import webIcon from '../../assets/icons/web_dev_icon.svg'
import InfoBadge from '../atoms/InfoBadge'

const interests = [
  { icon: skillsIcon, label: 'AI' },
  { icon: webIcon, label: 'Web' },
  { icon: mobileIcon, label: 'Mobile' },
  { icon: networkIcon, label: 'Networks' },
]

const InterestCards = () => {
  return (
    <div className="interest-cards" aria-label="Áreas de interés">
      {interests.map((interest) => <InfoBadge key={interest.label} {...interest} />)}
    </div>
  )
}

export default InterestCards
