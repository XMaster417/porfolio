import { useRef, useState } from 'react'
import projects from '../data/projects'

const isInteractiveElement = (target) => (
  target instanceof Element
  && Boolean(target.closest('a, button, input, textarea, select'))
)

const useProjectCarousel = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const swipeStart = useRef(null)
  const touchStart = useRef(null)
  const didSwipe = useRef(false)

  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) => (
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    ))
  }

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) => (
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    ))
  }

  const changeProjectBySwipe = (horizontalDistance, verticalDistance) => {
    if (
      Math.abs(horizontalDistance) < 48
      || Math.abs(horizontalDistance) <= Math.abs(verticalDistance)
    ) return

    didSwipe.current = true

    if (horizontalDistance > 0) {
      showPreviousProject()
      return
    }

    showNextProject()
  }

  const startProjectSwipe = (event) => {
    if (
      event.pointerType === 'touch'
      || !event.isPrimary
      || event.button !== 0
      || isInteractiveElement(event.target)
    ) return

    didSwipe.current = false
    swipeStart.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const endProjectSwipe = (event) => {
    const start = swipeStart.current

    if (!start || start.pointerId !== event.pointerId) return

    const horizontalDistance = event.clientX - start.x
    const verticalDistance = event.clientY - start.y

    swipeStart.current = null

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }

    changeProjectBySwipe(horizontalDistance, verticalDistance)
  }

  const startProjectTouchSwipe = (event) => {
    if (isInteractiveElement(event.target)) return

    const touch = event.touches[0]

    if (!touch) return

    didSwipe.current = false
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const endProjectTouchSwipe = (event) => {
    const start = touchStart.current
    const touch = event.changedTouches[0]

    touchStart.current = null

    if (!start || !touch) return

    changeProjectBySwipe(touch.clientX - start.x, touch.clientY - start.y)
  }

  const cancelProjectSwipe = () => {
    swipeStart.current = null
    didSwipe.current = false
  }

  const cancelProjectTouchSwipe = () => {
    touchStart.current = null
    didSwipe.current = false
  }

  const preventSwipeClick = (event) => {
    if (!didSwipe.current) return

    event.preventDefault()
    event.stopPropagation()
    didSwipe.current = false
  }

  return {
    projects,
    activeProjectIndex,
    showPreviousProject,
    showNextProject,
    startProjectSwipe,
    endProjectSwipe,
    startProjectTouchSwipe,
    endProjectTouchSwipe,
    cancelProjectSwipe,
    cancelProjectTouchSwipe,
    preventSwipeClick,
  }
}

export default useProjectCarousel
