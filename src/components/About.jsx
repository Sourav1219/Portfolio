import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiBookOpen } from 'react-icons/fi'
import styles from './About.module.css'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.2,0.8,0.2,1] } }
})

const meta = [
  { icon: <FiBookOpen/>, label: 'Education', value: 'B.Tech CSE — LPU (2023–2027)' },
  { icon: <FiMapPin/>,   label: 'Location',  value: 'Punjab, India' },
  { icon: <FiMail/>,     label: 'Email',     value: 'souravverma1191@gmail.com' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <motion.span variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'} className="section-label">
            Who I Am
          </motion.span>
          <motion.h2 variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'show' : 'hidden'} className="section-title">
            About <span className="gradient-text">Me</span>
          </motion.h2>
        </div>

        <motion.div
          className={`glass-panel ${styles.glassTextBlock}`}
          variants={fadeUp(0.2)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <div className={styles.innerGlow} />
          
          <div className={styles.textContent}>
            <p>I&apos;m a Full Stack Developer and a Computer Science &amp; Engineering student at Lovely Professional University (expected 2027).</p>
            <br/>
            <p>With a strong foundation in languages like Python, C/C++, and JavaScript, I build intelligent systems ranging from immersive log management dashboards to AI-integrated hotel booking platforms.</p>
            <br/>
            <p>Whether I&apos;m writing complex backend logic in Node or PHP, or crafting glowing glassmorphism interfaces in React, my goal is always to deliver robust architecture and an unforgettable user experience.</p>
          </div>
          
          <div className={styles.metaRow}>
            {meta.map(m => (
              <div key={m.label} className={styles.metaItem}>
                <span className={styles.metaIcon}>{m.icon}</span>
                <div className={styles.metaContent}>
                  <span className={styles.metaLabel}>{m.label}</span>
                  <span className={styles.metaValue}>{m.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
