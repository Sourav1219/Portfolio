import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Education.module.css'

const edu = [
  { date: '2023 – 2027', school: 'Lovely Professional University', degree: 'B.Tech — Computer Science & Engineering', detail: 'CGPA: 6.8 · Punjab, India', link: 'https://www.lpu.in/' },
  { date: 'May 2023', school: 'Mother Teresa Convent HSS', degree: 'Intermediate', detail: '75% · Kathua, Jammu', link: 'https://www.google.com/maps/place/Dharmani/@32.6338817,75.4029465,13z/data=!4m10!1m2!2m1!1sdharmni+billawar+!3m6!1s0x391c430029380531:0x58d7a256e0920085!8m2!3d32.6338205!4d75.4791913!15sChBkaGFybW5pIGJpbGxhd2FykgEPaG91c2luZ19jb21wbGV44AEA!16s%2Fg%2F11wtt8c174?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D' },
  { date: 'April 2021', school: 'Sacred Heart Convent High School', degree: 'Matriculation', detail: '93% · Billawar, Kathua', link: 'https://www.google.com/maps/place/Sacred+Heart+Convent+High+School/@32.584094,75.5489311,17z/data=!4m15!1m8!3m7!1s0x391c6792cace9a0f:0xe3f1777f8d1c45cb!2sSacred+Heart+Convent+High+School!8m2!3d32.5840895!4d75.551506!10e1!16s%2Fg%2F11cfb85lj!3m5!1s0x391c6792cace9a0f:0xe3f1777f8d1c45cb!8m2!3d32.5840895!4d75.551506!16s%2Fg%2F11cfb85lj?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D' },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="education" className={styles.section} ref={ref}>
      <div className="container">
        <p className="section-label">Background</p>
        <h2 className="section-title">Edu<span className="gradient-text">cation</span></h2>
        <div className={styles.timeline}>
          {edu.map((e, i) => (
            <motion.div
              key={e.school}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className={styles.dot} />
              {e.link ? (
                <motion.a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  style={{ display: 'block' }}
                  whileHover={{ borderColor: 'var(--accent-neon)', boxShadow: '0 6px 28px rgba(124,58,237,0.3)' }}
                >
                  <span className={styles.date}>{e.date}</span>
                  <h4>{e.school}</h4>
                  <p className={styles.degree}>{e.degree}</p>
                  <p className={styles.detail}>{e.detail}</p>
                </motion.a>
              ) : (
                <motion.div
                  className={styles.card}
                  whileHover={{ borderColor: 'var(--accent-neon)', boxShadow: '0 6px 28px rgba(124,58,237,0.3)' }}
                >
                  <span className={styles.date}>{e.date}</span>
                  <h4>{e.school}</h4>
                  <p className={styles.degree}>{e.degree}</p>
                  <p className={styles.detail}>{e.detail}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
