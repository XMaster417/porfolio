import arrowDownIcon from '../../assets/icons/arrow_down_icon.svg'

const ExperienceToggle = ({ isExpanded, title, onClick }) => {
  const action = isExpanded ? 'Contraer' : 'Expandir'

  return (
    <button
      className={`experience-toggle${isExpanded ? ' experience-toggle--expanded' : ''}`}
      type="button"
      aria-label={`${action} experiencia: ${title}`}
      aria-expanded={isExpanded}
      onClick={onClick}
    >
      <img src={arrowDownIcon} alt="" aria-hidden="true" />
    </button>
  )
}

export default ExperienceToggle
