import React from 'react'
import styles from './styles.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroInner}>
      <h1 className={styles.kicker}>Based in Varanasi, Uttar Pradesh</h1>
      <h2 className={styles.title}>Professional Event Photography & Cinematic Videography</h2>
      <p className={styles.subtitle}>Mr. Devesh & Team</p>
      <div className={styles.heroCtas}>
        <a className={styles.ctaPrimary} href="#contact">Get Quote</a>
        <a className={styles.ctaGhost} href="#portfolio">View Work</a>
      </div>
    </div>
    <div className={styles.heroImageWrap}>
      <img className={styles.heroImage} src="https://readdy.ai/api/search-image?query=professional%20photographer%20team%20behind%20the%20scenes%20wedding%20photography%20equipment%20cinematic%20lighting%20setup%20creative%20team%20working%20together%20modern%20photography%20studio%20atmosphere%20professional%20camera%20gear%20artistic%20composition&width=900&height=600&seq=hero&orientation=landscape" alt="Team"/>
    </div>
  </section>
)

const Stats = () => (
  <section className={styles.stats}>
    <div className={styles.stat}>
      <h3>500+</h3>
      <p>Events Captured</p>
    </div>
    <div className={styles.stat}>
      <h3>98%</h3>
      <p>Client Satisfaction</p>
    </div>
    <div className={styles.stat}>
      <h3>8+</h3>
      <p>Years Experience</p>
    </div>
    <div className={styles.stat}>
      <h3>1000+</h3>
      <p>Work Samples</p>
    </div>
  </section>
)

const Services = () => (
  <section className={styles.services} id="services">
    <h2 className={styles.sectionTitle}>Our Services</h2>
    <div className={styles.servicesGrid}>
      {[
        {title: 'Wedding Photography', items: ['Pre-wedding shoots','Ceremony coverage','Reception highlights','Couple portraits']},
        {title: 'Corporate Events', items: ['Conference coverage','Team events','Product launches','Award ceremonies']},
        {title: 'Cinematic Videography', items: ['Wedding films','Event highlights','Promotional videos','Documentary style']},
        {title: 'Drone Coverage', items: ['Aerial photography','Venue overviews','Landscape shots','Dynamic sequences']},
      ].map(s => (
        <article key={s.title} className={styles.serviceCard}>
          <h3>{s.title}</h3>
          <ul>
            {s.items.map(i => <li key={i}>{i}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
)

const Portfolio = () => (
  <section className={styles.portfolio} id="portfolio">
    <h2 className={styles.sectionTitle}>Our Portfolio</h2>
    <div className={styles.portfolioGrid}>
      {["wedding-1","corporate-1","wedding-video","birthday-1","portrait-1","beach-wedding","product-launch","cultural-fest","family-portrait"].map((q, i) => (
        <figure key={q} className={styles.portfolioItem}>
          <img src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(q)}&width=800&height=500&seq=${i}`} alt={q}/>
          <figcaption>
            <strong>{q.replace(/-/g,' ').replace(/\d+/g,'')}</strong>
            <span className={styles.tag}>{i%3===0? 'Wedding': i%3===1? 'Corporate':'Portraits'}</span>
          </figcaption>
        </figure>
      ))}
    </div>
    <div className={styles.loadMoreWrap}><button className={styles.loadMore}>Load More Work</button></div>
  </section>
)

const Testimonials = () => (
  <section className={styles.testimonials}>
    <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
    <div className={styles.testimonialGrid}>
      {[{
        name: 'Priya & Rahul Sharma', role: 'Wedding Couple', text: 'Mr. Devesh and his team captured our wedding day perfectly! Every emotion, every moment was beautifully documented.'
      },{
        name: 'Anjali Patel', role: 'Corporate Event Manager', text: 'Amazing experience with Mr. Devesh team for my annual corporate conference.'
      },{
        name: 'Vikram Singh', role: 'Birthday Client', text: 'The final photos were absolutely stunning and captured the joy of the celebration perfectly.'
      }].map((t, idx) => (
        <blockquote key={t.name} className={styles.testimonial}>
          <img src={`https://readdy.ai/api/search-image?query=${encodeURIComponent(t.name)}&width=100&height=100&seq=test-${idx}`} alt={t.name}/>
          <div>
            <strong>{t.name}</strong>
            <small>{t.role}</small>
            <p>"{t.text}"</p>
          </div>
        </blockquote>
      ))}
    </div>
  </section>
)

import ContactClient from './ContactClient'
import Nav from './Nav'
import Footer from './Footer'
import How from './How'

export default function PreviewPage(){
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <How />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactClient />
      </main>
      <Footer />
    </>
  )
}
