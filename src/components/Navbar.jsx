import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Projects', 'Certs', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <motion.a
          href="#"
          className={styles.logo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sourav Verma
        </motion.a>

        <ul className={styles.links}>
          {links.map((l, i) => (
            <motion.li
              key={l}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.2 }}
            >
              <Link to={l.toLowerCase()} smooth duration={600} offset={-70} className={styles.link} activeClass={styles.active} spy>
                {l}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.hireWrap}
        >
          <Link to="contact" smooth duration={600} offset={-70} className={styles.hire}>
            Hire Me ✨
          </Link>
        </motion.div>

        <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="menu">
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.drawer}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(l => (
              <Link
                key={l}
                to={l.toLowerCase()}
                smooth
                duration={600}
                offset={-70}
                className={styles.drawerLink}
                onClick={() => setOpen(false)}
              >
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
