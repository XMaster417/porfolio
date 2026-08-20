import { useState } from 'react'
import skills, { skillTabs } from '../data/skills'

const useSkillsTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const showPreviousTab = () => {
    setActiveTabIndex((currentIndex) => (
      currentIndex === 0 ? skillTabs.length - 1 : currentIndex - 1
    ))
  }

  const showNextTab = () => {
    setActiveTabIndex((currentIndex) => (
      currentIndex === skillTabs.length - 1 ? 0 : currentIndex + 1
    ))
  }

  const activeTab = skillTabs[activeTabIndex]

  return {
    skillTabs,
    activeTab,
    activeTabIndex,
    activeSkills: skills.filter((skill) => skill.tab.includes(activeTab.id)),
    selectTab: setActiveTabIndex,
    showPreviousTab,
    showNextTab,
  }
}

export default useSkillsTabs
