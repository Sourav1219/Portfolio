import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import styles from './ResumeSection.module.css'

export default function ResumeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="resume" className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <p className="section-label">My Resume</p>
          <h2 className="section-title">Professional <span className="gradient-text">Profile</span></h2>
        </div>

        <div className={styles.grid}>
          {/* CV Image Preview */}
          <motion.div
            className={`glass-panel ${styles.imageWrap}`}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2,0.8,0.2,1] }}
          >
            <div className={styles.imageGlow} />
            <img src="/cv.jpg" alt="Sourav Verma CV" className={styles.cvImage} />
          </motion.div>

          {/* Action / Download Area */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2,0.8,0.2,1] }}
          >
            <div className={`glass-panel ${styles.infoCard}`}>
              <div className={styles.infoGlow} />
              <h3>Grab a Copy of My CV</h3>
              <p>Download my full resume to see my detailed academic background, comprehensive technical skills, and all the projects I have developed over my career.</p>
              
              <div className={styles.actions}>
                <a href="/cv.jpg" download="Sourav_Verma_CV.jpg" className={`btn-primary ${styles.downloadBtn}`}>
                  <FiDownload size={20} />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
