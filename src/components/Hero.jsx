import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-scroll'
import styles from './Hero.module.css'

const socials = [
  { icon: <FiGithub size={20}/>, href: 'https://github.com/Sourav1219', label: 'GitHub' },
  { icon: <FiLinkedin size={20}/>, href: 'https://www.linkedin.com/in/sourav-verma091/', label: 'LinkedIn' },
  { icon: <FiMail size={20}/>, href: 'mailto:souravverma1191@gmail.com', label: 'Email' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2,0.8,0.2,1] } }
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.ambientGlow} />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={itemVariants} className={styles.greeting}>
            Hello, I&apos;m
          </motion.p>

          <motion.h1 variants={itemVariants} className={styles.name}>
            Sourav <span className="gradient-text">Verma</span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <span className={styles.badge}>
              <span className={styles.badgeShine} />
              Full Stack Developer
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.bio}>
            Crafting intelligent software solutions and seamless web experiences. <br/>
            Blending thoughtful design with robust, high-performance architecture.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <Link to="projects" smooth duration={800} offset={-80}>
              <button className="btn-primary">View Projects</button>
            </Link>
            <Link to="contact" smooth duration={800} offset={-80}>
              <button className="btn-glass">Get In Touch</button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.socials}>
            {socials.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                aria-label={s.label}
                className={`glass-panel ${styles.socialBtn}`}
                whileHover={{ y: -6, scale: 1.1, borderColor: 'var(--accent-neon)', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Right Avatar Section */}
        <motion.div
          className={styles.avatarWrap}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.2,0.8,0.2,1] }}
        >
          <div className={styles.ringGlow} />
          <div className={styles.ring1}/>
          <div className={styles.ring2}/>
          <div className={styles.ring3}/>
          
          <motion.div
            className={styles.avatarCore}
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className={`gradient-text ${styles.initials}`}>SV</span>
          </motion.div>

          {/* Floating Glass Tech Pills */}
          <motion.div className={`glass-panel ${styles.pill} ${styles.pill1}`} animate={{ y:[0,-10,0], rotate: [0,-10,0] }} transition={{ duration:4, repeat:Infinity, delay:0 }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="16"/> React</motion.div>
          <motion.div className={`glass-panel ${styles.pill} ${styles.pill2}`} animate={{ y:[0,12,0], rotate: [0,10,0] }} transition={{ duration:4.5, repeat:Infinity, delay:1 }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" width="16"/> Node.js</motion.div>
          <motion.div className={`glass-panel ${styles.pill} ${styles.pill3}`} animate={{ y:[0,-15,0], rotate: [0,-15,0] }} transition={{ duration:5, repeat:Infinity, delay:2.5 }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="16"/> Python</motion.div>
          <motion.div className={`glass-panel ${styles.pill} ${styles.pill4}`} animate={{ y:[0,10,0], rotate: [0,8,0] }} transition={{ duration:3.8, repeat:Infinity, delay:0.8 }}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width="16"/> PHP</motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link to="about" smooth duration={800} offset={-80} style={{cursor:'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
          <span style={{fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)'}}>Scroll</span>
          <FiArrowDown size={20}/>
        </Link>
      </motion.div>
    </section>
  )
}
