import arrowIcon from '../../assets/icons/arrow_down_icon.svg'
import useSkillsTabs from '../../hooks/useSkillsTabs'
import SectionLabel from '../atoms/SectionLabel'
import SkillTab from '../atoms/SkillTab'
import SkillCard from '../molecules/SkillCard'

const SkillsSection = () => {
  const {
    skillTabs,
    activeTab,
    activeTabIndex,
    activeSkills,
    selectTab,
    showPreviousTab,
    showNextTab,
  } = useSkillsTabs()

  const getTabPosition = (tabIndex) => {
    if (tabIndex === activeTabIndex) return 'current'

    const previousIndex = (
      activeTabIndex - 1 + skillTabs.length
    ) % skillTabs.length
    const nextIndex = (activeTabIndex + 1) % skillTabs.length

    if (tabIndex === previousIndex) return 'previous'
    if (tabIndex === nextIndex) return 'next'

    return 'hidden'
  }

  const focusTab = (tabIndex) => {
    selectTab(tabIndex)

    window.requestAnimationFrame(() => {
      const tabId = skillTabs[tabIndex].id
      document.querySelector(`#skill-tab-${tabId}`)?.focus()
    })
  }

  const handleTabKeyDown = (event, tabIndex) => {
    const lastTabIndex = skillTabs.length - 1
    const destinationByKey = {
      ArrowLeft: tabIndex === 0 ? lastTabIndex : tabIndex - 1,
      ArrowRight: tabIndex === lastTabIndex ? 0 : tabIndex + 1,
      Home: 0,
      End: lastTabIndex,
    }
    const destinationIndex = destinationByKey[event.key]

    if (destinationIndex === undefined) return

    event.preventDefault()
    focusTab(destinationIndex)
  }

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-section__content">
        <SectionLabel id="skills-title" label="SKILLS" centered showEndDot />

        <div className="skills-tabs-carousel">
          <button
            className="skills-tabs-carousel__button skills-tabs-carousel__button--previous"
            type="button"
            aria-label="Show previous skill tab"
            onClick={showPreviousTab}
          >
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </button>

          <div className="skills-tabs-carousel__viewport">
            <div className="skills-tabs" role="tablist" aria-label="Skill tabs">
              {skillTabs.map((tab, index) => (
                <SkillTab
                  key={tab.id}
                  category={tab}
                  isActive={index === activeTabIndex}
                  position={getTabPosition(index)}
                  onClick={() => selectTab(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                />
              ))}
            </div>
          </div>

          <button
            className="skills-tabs-carousel__button skills-tabs-carousel__button--next"
            type="button"
            aria-label="Show next skill tab"
            onClick={showNextTab}
          >
            <img src={arrowIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        <div className="skills-tabs-carousel__progress" aria-hidden="true">
          {skillTabs.map((tab, index) => (
            <span
              className={
                `skills-tabs-carousel__progress-segment${
                  index === activeTabIndex
                    ? ' skills-tabs-carousel__progress-segment--active'
                    : ''
                }`
              }
              key={tab.id}
            />
          ))}
        </div>

        <div
          id="skills-panel"
          className="skills-grid"
          role="tabpanel"
          aria-labelledby={`skill-tab-${activeTab.id}`}
          key={activeTab.id}
        >
          {activeSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
