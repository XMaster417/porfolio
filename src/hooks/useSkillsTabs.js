import { useRef, useState } from 'react'
import skills, { skillTabs } from '../data/skills'

const useSkillsTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const swipeStartX = useRef(null)

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

  const startTabSwipe = (event) => {
    if (!window.matchMedia('(max-width: 700px)').matches) return

    swipeStartX.current = event.touches[0]?.clientX ?? null
  }

  const endTabSwipe = (event) => {
    if (!window.matchMedia('(max-width: 700px)').matches) return

    const startX = swipeStartX.current
    const endX = event.changedTouches[0]?.clientX

    swipeStartX.current = null

    if (startX === null || endX === undefined || Math.abs(endX - startX) < 40) return

    if (endX > startX) {
      showPreviousTab()
      return
    }

    showNextTab()
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
    startTabSwipe,
    endTabSwipe,
  }
}

export default useSkillsTabs
