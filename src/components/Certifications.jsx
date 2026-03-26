import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Certifications.module.css'
import { FiExternalLink } from 'react-icons/fi'

const certs = [
  { emoji: '☁️', title: 'Cloud Computing MOOC', org: 'NPTEL Swayam — IIT Kharagpur', date: 'Oct 2025', link: '/cloud-computing-mooc.jpg' },
  { emoji: '💻', title: 'C Programming', org: 'CSE Pathshala', date: 'July 2025', link: '/c-programming.png' },
  { emoji: '🤖', title: 'ChatGPT-4 Prompt Engineering', org: 'Infosys — GenAI & LLM', date: 'June 2025', link: '/chatgpt-prompt-engineering.jpg' },
  { emoji: '🌐', title: 'Bits & Bytes of Networking', org: 'Coursera', date: 'Sep 2024', link: '/networking-certificate.jpg' },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="certs" className={styles.section} ref={ref}>
      <div className="container">
        <p className="section-label">Achievements</p>
        <h2 className="section-title">Certifi<span className="gradient-text">cations</span></h2>
        <div className={styles.grid}>
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className={styles.card}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ x: 6, borderColor: 'var(--accent-1)', boxShadow: '-4px 0 24px rgba(124,107,232,0.25)' }}
            >
              <div className={styles.badge}>{c.emoji}</div>
              <div className={styles.info}>
                <h4>{c.title}</h4>
                <p>{c.org}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                  <span className={styles.date}>{c.date}</span>
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '2px 8px', fontSize: '10px', minWidth: 'auto', gap: '4px', height: '20px' }}>
                      Certificate <FiExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
