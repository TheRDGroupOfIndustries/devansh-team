import React from 'react'
import styles from './styles.module.css'

export default function How(){
  return (
    <section className={styles.how} id="about">
      <div className={styles.howInner}>
        <div className={styles.howContent}>
          <h2 className={styles.sectionTitle}>About <span className={styles.highlight}>Mr. Devesh & Team</span></h2>
          <div className={styles.howCard}>
            <h3>Our Story</h3>
            <p>
              With over 8 years of experience in the photography and videography industry, Mr. Devesh leads a passionate team of creative professionals dedicated to capturing life's most precious moments.
            </p>
            <p>
              Our journey began with a simple belief: every moment tells a story, and every story deserves to be told beautifully. From intimate weddings to grand corporate events, we bring artistry and technical excellence to every project.
            </p>
          </div>

          <div className={styles.statsCards}>
            <div className={styles.smallCard}><strong>500+</strong><span>Events Captured</span></div>
            <div className={styles.smallCard}><strong>98%</strong><span>Client Satisfaction</span></div>
          </div>
        </div>

        <div className={styles.howMedia}>
          <div className={styles.mediaWrap}>
            <img src="/figma-assets/hero-event@2x.jpg" alt="Team at work"/>
            <div className={styles.badge}>Mr. Devesh<br/><small>Lead Photographer</small></div>
          </div>
        </div>
      </div>

      <div className={styles.howFeatures}>
        <div className={styles.feature}><div className={styles.featureIcon}>🎯</div><h4>Creative Vision</h4></div>
        <div className={styles.feature}><div className={styles.featureIcon}>⭐</div><h4>Excellence</h4></div>
        <div className={styles.feature}><div className={styles.featureIcon}>❤️</div><h4>Passion</h4></div>
      </div>
    </section>
  )
}
