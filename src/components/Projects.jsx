import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import styles from './Projects.module.css'

const projects = [
  {
    emoji: '🏨',
    title: 'AI Hotel Booking Assistant',
    role: 'Full Stack Developer',
    date: 'Feb 2025',
    desc: 'A web-based hostel booking assistant that helps users check room availability and book rooms. Features an integrated AI assistant to answer user queries and guide through the booking process.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    github: 'https://github.com/Sourav1219',
    color: '#7c6be8',
  },
  {
    emoji: '📋',
    title: 'Log Management System',
    role: 'Full Stack Developer',
    date: 'Jan 2025',
    desc: 'A web-based application to record, manage, and track daily logs efficiently. Built responsive front-end pages and backend functionality in PHP with structured data validation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    github: 'https://github.com/Sourav1219',
    color: '#a855f7',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8 }}
            >
              {/* top glow tint */}
              <div className={styles.cardGlow} style={{ background: p.color }} />

              <div className={styles.cardTop}>
                <div className={styles.emoji}>{p.emoji}</div>
                <span className={styles.date}>{p.date}</span>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.role}>{p.role}</p>
              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.tech}>
                {p.tech.map(t => (
                  <motion.span
                    key={t}
                    className={styles.techTag}
                    style={{ '--c': p.color }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={p.github} target="_blank" rel="noopener" className={styles.linkBtn}>
                  <FiGithub size={14} /> Source Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
