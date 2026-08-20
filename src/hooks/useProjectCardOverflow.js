import { useLayoutEffect, useRef, useState } from 'react'

const useProjectCardOverflow = (project) => {
  const cardRef = useRef(null)
  const [isScrollable, setIsScrollable] = useState(false)

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card) return undefined

    const updateOverflow = () => {
      setIsScrollable(card.scrollHeight > card.clientHeight + 1)
    }

    updateOverflow()
    window.addEventListener('resize', updateOverflow)

    return () => window.removeEventListener('resize', updateOverflow)
  }, [project])

  return { cardRef, isScrollable }
}

export default useProjectCardOverflow
