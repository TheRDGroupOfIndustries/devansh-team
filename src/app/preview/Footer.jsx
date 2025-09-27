import React from 'react'
import styles from './styles.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCol}>
          <div className={styles.logo}><span className={styles.logoIcon}>📷</span><strong>Mr. Devesh & Team</strong><small>Photography & Videography</small></div>
          <p>Capturing life's most precious moments with artistic vision and professional excellence.</p>
          <div className={styles.socials}>Instagram · YouTube · Facebook · LinkedIn</div>
        </div>

        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <p>Call Us<br/><strong>+91 98765 43210</strong></p>
          <p>Email Us<br/><strong>info@mrdeveshteam.com</strong></p>
          <p>Location<br/><strong>Varanasi, Uttar Pradesh</strong></p>
        </div>
      </div>
    </footer>
  )
}
