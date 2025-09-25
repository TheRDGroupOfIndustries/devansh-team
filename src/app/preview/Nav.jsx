"use client"
import React from 'react'
import styles from './styles.module.css'

export default function Nav(){
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <a className={styles.logo} href="#">
          <span className={styles.logoIcon}>📷</span>
          <div className={styles.logoText}>
            <strong>Mr. Devesh & Team</strong>
            <small>Photography & Videography</small>
          </div>
        </a>

        <nav className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
          <a className={styles.bookBtn} href="#contact">Book Now</a>
        </nav>
      </div>
    </header>
  )
}
