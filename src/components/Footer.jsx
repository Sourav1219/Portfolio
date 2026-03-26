import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

const socials = [
  { icon:<FiGithub size={18}/>, href:'https://github.com/Sourav1219' },
  { icon:<FiLinkedin size={18}/>, href:'https://www.linkedin.com/in/sourav-verma091/' },
  { icon:<FiMail size={18}/>, href:'mailto:souravverma1191@gmail.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>Designed &amp; Built by <span className="gradient-text" style={{fontWeight:700}}>Sourav Verma</span></p>
        <div className={styles.socials}>
          {socials.map((s,i) => (
            <motion.a key={i} href={s.href} target="_blank" rel="noopener" className={styles.socialLink} whileHover={{y:-3, color:'var(--accent-1)'}}>
              {s.icon}
            </motion.a>
          ))}
        </div>
        <p className={styles.copy}>© 2025 All rights reserved.</p>
      </div>
    </footer>
  )
}
