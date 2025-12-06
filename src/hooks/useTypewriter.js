import { useState, useEffect } from 'react'

export default function useTypewriter(words = [], options = {}) {
  const { loop = true, typingSpeed = 120, deletingSpeed = 60, pause = 1500 } = options
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return

    const current = words[index % words.length]
    let timeout = null

    if (!isDeleting && subIndex <= current.length) {
      timeout = setTimeout(() => setSubIndex(s => s + 1), typingSpeed)
    } else if (isDeleting && subIndex >= 0) {
      timeout = setTimeout(() => setSubIndex(s => s - 1), deletingSpeed)
    }

    if (subIndex === current.length + 1 && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false)
      setIndex(i => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pause])

  const currentWord = words[index % words.length] || ''
  const displayed = currentWord.substring(0, Math.max(0, Math.min(subIndex, currentWord.length)))
  return displayed
}
