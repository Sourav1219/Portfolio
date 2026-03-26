import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isClickable = target.tagName.toLowerCase() === 'a' ||
                          target.tagName.toLowerCase() === 'button' ||
                          target.closest('a') !== null ||
                          target.closest('button') !== null ||
                          window.getComputedStyle(target).cursor === 'pointer'

      setIsHovering(isClickable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className={styles.cursorDot}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className={styles.cursorRing}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(124, 58, 237, 0.8)' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: isHovering ? 'rgba(124, 58, 237, 0.1)' : 'transparent'
        }}
        transition={{ type: 'spring', mass: 0.4, stiffness: 300, damping: 20 }}
      />
    </>
  )
}
