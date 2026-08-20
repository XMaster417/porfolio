const SkillTab = ({ category, isActive, position, onClick, onKeyDown }) => (
  <button
    id={`skill-tab-${category.id}`}
    className={`skill-tab skill-tab--${position}${isActive ? ' skill-tab--active' : ''}`}
    type="button"
    role="tab"
    aria-selected={isActive}
    aria-controls="skills-panel"
    tabIndex={isActive ? 0 : -1}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    <img src={category.icon} alt="" aria-hidden="true" />
    <span>{category.label}</span>
  </button>
)

export default SkillTab
