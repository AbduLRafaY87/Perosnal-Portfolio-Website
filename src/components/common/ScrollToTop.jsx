import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ smooth = false }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    try {
      if (smooth) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        window.scrollTo(0, 0)
      }
    } catch (e) {
      // ignore if window isn't available (SSR)
    }
  }, [pathname, smooth])

  return null
}

export default ScrollToTop
