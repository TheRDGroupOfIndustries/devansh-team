"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export default function Nav(){
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navInner}>
        <a className={styles.logo} href="#home">
          <span className={styles.logoIcon}>📷</span>
          <div className={styles.logoText}>
            <strong>Mr. Devesh & Team</strong>
            <small>Photography & Videography</small>
          </div>
        </a>

        <nav className={`${styles.navLinks} ${open ? styles.open : ''}`} aria-label="Primary Navigation">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className={styles.bookBtn} href="#contact" onClick={() => setOpen(false)}>Book Now</a>
        </nav>

        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>

      {open && <div className={styles.mobileBackdrop} onClick={() => setOpen(false)} />}
    </header>
  )
}
