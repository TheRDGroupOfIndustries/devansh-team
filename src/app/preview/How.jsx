import React from 'react'
import styles from './styles.module.css'

export default function How(){
  return (
    <section className={styles.how} id="about">
      <h2 className={styles.aboutTitle}>About <span className={styles.highlight}>Mr. Devesh & Team</span></h2>

      <div className={styles.howInner}>
        <div className={styles.howContent}>
          <div className={styles.howCard}>
            <h3>Our Story</h3>
            <p>
              With over 8 years of experience in the photography and videography industry, Mr. Devesh leads a passionate team of creative professionals dedicated to capturing life's most precious moments.
            </p>
            <p>
              Our journey began with a simple belief: every moment tells a story, and every story deserves to be told beautifully. From intimate weddings to grand corporate events, we bring artistry and technical excellence to every project.
            </p>
          </div>

          <div className={styles.statBoxes}>
            <div className={styles.statBox + ' ' + styles.statBoxRed}>
              <div className={styles.statIcon}>📷</div>
              <strong>500+</strong>
              <small>Events Captured</small>
            </div>

            <div className={styles.statBox + ' ' + styles.statBoxBlue}>
              <div className={styles.statIcon}>💙</div>
              <strong>98%</strong>
              <small>Client Satisfaction</small>
            </div>
          </div>
        </div>

        <div className={styles.howMedia}>
          <div className={styles.mediaWrap}>
            <img src="/figma-assets/hero-event@2x.jpg" alt="Team at work"/>
            <div className={styles.mediaBadge}><strong>Mr. Devesh</strong><small>Lead Photographer</small></div>
          </div>
        </div>
      </div>

      <div className={styles.howFeatures}>
        <div className={styles.feature}><div className={styles.featureIcon}>🎯</div><h4>Creative Vision</h4><p>We see beyond the lens, capturing not just images but emotions and stories that last a lifetime.</p></div>
        <div className={styles.feature}><div className={styles.featureIcon}>⭐</div><h4>Excellence</h4><p>Every project receives our complete attention to detail and commitment to delivering exceptional results.</p></div>
        <div className={styles.feature}><div className={styles.featureIcon}>❤️</div><h4>Passion</h4><p>Our love for photography and videography drives us to constantly innovate and exceed expectations.</p></div>
      </div>
    </section>
  )
}
