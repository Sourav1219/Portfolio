import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'souravverma1191@gmail.com', href: 'mailto:souravverma1191@gmail.com' },
  { icon: <FiPhone size={18} />, label: 'Phone', value: '+91 8082832854', href: 'tel:+918082832854' },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/Sourav1219', href: 'https://github.com/Sourav1219' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'in/sourav-verma091', href: 'https://www.linkedin.com/in/sourav-verma091/' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n---\nSender Email: ${form.email}`)
    const mailtoLink = `mailto:souravverma1191@gmail.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    
    setStatus('✅ Opened your email client!')
    setForm({ name: '', email: '', message: '' })
    setLoading(false)
  }

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <div className="container">
        <p className="section-label">Say Hello</p>
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <div className={styles.grid}>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.intro}>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              join something great. Feel free to reach out!
            </p>
            <div className={styles.items}>
              {contactInfo.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener"
                  className={styles.item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
                  whileHover={{ x: 6, borderColor: 'var(--accent-1)' }}
                >
                  <span className={styles.itemIcon}>{c.icon}</span>
                  <div>
                    <p className={styles.itemLabel}>{c.label}</p>
                    <p className={styles.itemValue}>{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.group}>
              <label>Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
            </div>
            <div className={styles.group}>
              <label>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
            <div className={styles.group}>
              <label>Message</label>
              <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Hello Sourav, I'd love to..." required />
            </div>
            <motion.button
              type="submit"
              className={`btn-primary ${styles.submitBtn}`}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {loading ? 'Sending…' : <><FiSend /> Send Message</>}
            </motion.button>
            {status && <motion.p className={styles.feedback} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{status}</motion.p>}
          </motion.form>

        </div>
      </div>
    </section>
  )
}
