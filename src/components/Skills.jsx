import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Skills.module.css'

const categories = [
  {
    title: 'Core Languages',
    skills: [
      { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', link: 'https://en.wikipedia.org/wiki/Python_(programming_language)' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', link: 'https://en.wikipedia.org/wiki/JavaScript' },
      { name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
      { name: 'C',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
      { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', link: 'https://en.wikipedia.org/wiki/PHP' },
    ]
  },
  {
    title: 'Frameworks & Databases',
    skills: [
      { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', link: 'https://en.wikipedia.org/wiki/React_(software)' },
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', link: 'https://en.wikipedia.org/wiki/Node.js' },
      { name: 'Express',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true, link: 'https://en.wikipedia.org/wiki/Express.js' },
      { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', link: 'https://en.wikipedia.org/wiki/Tailwind_CSS' },
      { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', link: 'https://en.wikipedia.org/wiki/MySQL' },
      { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', link: 'https://en.wikipedia.org/wiki/MongoDB' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', link: 'https://en.wikipedia.org/wiki/PostgreSQL' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', link: 'https://en.wikipedia.org/wiki/Git' },
      { name: 'Linux',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', link: 'https://en.wikipedia.org/wiki/Linux' },
      { name: 'VS Code',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', link: 'https://en.wikipedia.org/wiki/Visual_Studio_Code' },
    ]
  }
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  let delayCounter = 0;

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.header}>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">My <span className="gradient-text">Stack</span></h2>
        </div>

        <div className={styles.categories}>
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.title} 
              className={styles.categoryWrap}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.2,0.8,0.2,1] }}
            >
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <div className={styles.grid}>
                {cat.skills.map((tech) => {
                  delayCounter++;
                  return (
                    <motion.a
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={tech.name}
                      className={`glass-panel ${styles.techCard}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: (delayCounter * 0.05) + 0.2, ease: [0.2,0.8,0.2,1] }}
                      whileHover={{ scale: 1.05, y: -5, boxShadow: '0 10px 40px rgba(124,58,237,0.3)', borderColor: 'rgba(168,85,247,0.4)' }}
                    >
                      <div className={styles.glowEffect} />
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className={styles.icon} 
                        style={tech.invert ? { filter: 'invert(1)' } : {}}
                      />
                      <span className={styles.name}>{tech.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
