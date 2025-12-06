import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../styling/loader.css'

/**
 * NavigationLoader
 * Shows a colorful, animated overlay on route changes (and optionally on initial load).
 * Props:
 * - minDuration: minimum visible time in ms (default 600)
 * - exitDelay: fade-out duration in ms (default 400)
 * - showOnInitialLoad: whether to show loader on first mount (default true)
 */
const NavigationLoader = ({ minDuration = 800, exitDelay = 380, showOnInitialLoad = false }) => {
  const { pathname } = useLocation()
  const [isMounted, setIsMounted] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [progress, setProgress] = useState(0)

  const prevPath = useRef(null)
  const raf = useRef(null)
  const timeout = useRef(null)

  useEffect(() => {
    const shouldShow = prevPath.current === null ? showOnInitialLoad : prevPath.current !== pathname

    const clearAll = () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      if (timeout.current) clearTimeout(timeout.current)
      raf.current = null
      timeout.current = null
    }

    if (shouldShow) {
      setIsMounted(true)
      // start visible next tick
      timeout.current = setTimeout(() => setIsActive(true), 12)

      const start = performance.now()
      const end = start + minDuration

      const step = (now) => {
        const t = Math.max(0, Math.min(1, (now - start) / (minDuration)))
        setProgress(Math.round(t * 100))
        if (now < end) raf.current = requestAnimationFrame(step)
      }
      raf.current = requestAnimationFrame(step)

      // finish after minDuration and fade out
      timeout.current = setTimeout(() => {
        setIsActive(false)
        // unmount after exitDelay
        timeout.current = setTimeout(() => {
          setIsMounted(false)
          setProgress(0)
        }, exitDelay)
      }, minDuration)
    }

    prevPath.current = pathname

    return () => clearAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  if (!isMounted) return null

  return (
    <div className={`nav-loader-overlay coder ${isActive ? 'visible' : 'hidden'}`} aria-hidden="true">
      <div className="coder-card">
        <div className="coder-left">
          <div className="coder-ring" style={{ ['--p']: `${progress}%` }} />
          <div className="coder-percent">{progress}%</div>
        </div>

        <div className="coder-right">
          <div className="coder-title">Painting Content</div>
          <div className="coder-bars">
            <span className="bar" style={{ width: `${20 + (progress / 5)}%` }} />
            <span className="bar" style={{ width: `${10 + (progress / 3)}%` }} />
            <span className="bar" style={{ width: `${5 + (progress / 2.5)}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationLoader
