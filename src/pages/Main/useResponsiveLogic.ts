import { useLayoutEffect, useState } from 'react'

export default () => {
  const [isShowingDrawer, setIsShowingDrawer] = useState(true)
  const [isResponsiveMode, setIsResponsiveMode] = useState(false)

  const handleToggleDrawer = () => {
    setIsShowingDrawer((isShowing) => !isShowing)
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsResponsiveMode(true)
        setIsShowingDrawer(false)
      } else {
        setIsResponsiveMode(false)
        setIsShowingDrawer(true)
      }
    }

    handleResize() // Run when opens the page
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isShowingDrawer,
    isResponsiveMode,
    handleToggleDrawer,
  }
}
