import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiDownload, FiExternalLink } from 'react-icons/fi'
import styles from './CV.module.css'

export default function CV() {
  return (
    <div className={styles.page}>
      {/* Background glow specific to CV page */}
      <div className={styles.glowBlob} />
      
      <div className={`container ${styles.container}`}>
        <motion.header 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className={styles.backLink}>
            <FiArrowLeft /> Back to Portfolio
          </Link>
          <div className={styles.actions}>
            {/* Direct link to external backend api that redirects to Drive */}
            <a href="/cv.jpg" download="Sourav_Verma_CV.jpg" className="btn-primary">
              <FiDownload size={18} /> Download CV
            </a>
          </div>
        </motion.header>

        <motion.div 
          className={styles.cvWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="glass-panel" style={{ padding: '40px 50px', position: 'relative', overflow: 'hidden' }}>
            <div className={styles.shine} />
            
            <div className={styles.cvHeader}>
              <h1 className={styles.name}>Sourav Verma</h1>
              <p className={styles.role}>Full Stack Developer</p>
              <div className={styles.contactRow}>
                <a href="mailto:souravverma1191@gmail.com">souravverma1191@gmail.com</a>
                <a href="tel:+918082832854">+91 8082832854</a>
                <a href="https://linkedin.com/in/sourav-verma091/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://github.com/Sourav1219" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.section}>
              <h2>Education</h2>
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <h3>Lovely Professional University</h3>
                  <span>2023 – 2027</span>
                </div>
                <p>B.Tech in Computer Science & Engineering (CGPA: 6.8) · Punjab, India</p>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Skills</h2>
              <ul className={styles.skillsList}>
                <li><strong>Languages:</strong> Python, C, C++, PHP, JavaScript</li>
                <li><strong>Frameworks:</strong> React.js, Node.js, Express.js, Tailwind CSS, HTML/CSS</li>
                <li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
                <li><strong>Tools:</strong> Git, GitHub, VS Code, Linux</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2>Projects</h2>
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <h3>AI Hotel Booking Assistant</h3>
                  <span>Feb 2025</span>
                </div>
                <ul className={styles.bullets}>
                  <li>Created a web-based hostel booking assistant to help users check room availability smoothly.</li>
                  <li>Built responsive interface using HTML, CSS, JavaScript, with PHP backend for handling bookings.</li>
                  <li>Integrated a basic AI assistant to answer user queries and guide through the booking process.</li>
                </ul>
              </div>
              
              <div className={styles.entry}>
                <div className={styles.entryHeader}>
                  <h3>Log Management System</h3>
                  <span>Jan 2025</span>
                </div>
                <ul className={styles.bullets}>
                  <li>Developed a web app to record, manage, and track daily logs efficiently.</li>
                  <li>Implemented backend PHP scripts for form submissions, data storage, and structured validation.</li>
                </ul>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Certifications</h2>
              <ul className={styles.bullets}>
                <li>
                  Cloud Computing MOOC Certification - NPTEL Swayam (IIT Kharagpur) — Oct 2025
                  <a href="/cloud-computing-mooc.jpg" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: 'var(--accent-1)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    [View <FiExternalLink size={12} />]
                  </a>
                </li>
                <li>
                  C Programming - CSE Pathshala — July 2025
                  <a href="/c-programming.png" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: 'var(--accent-1)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    [View <FiExternalLink size={12} />]
                  </a>
                </li>
                <li>
                  ChatGPT-4 Prompt Engineering & Generative AI - Infosys — June 2025
                  <a href="/chatgpt-prompt-engineering.jpg" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: 'var(--accent-1)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    [View <FiExternalLink size={12} />]
                  </a>
                </li>
                <li>
                  The Bits and Bytes of Computer Networking - Coursera — Sep 2024
                  <a href="/networking-certificate.jpg" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '8px', color: 'var(--accent-1)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    [View <FiExternalLink size={12} />]
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
