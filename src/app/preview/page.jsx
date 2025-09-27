import React from 'react'
import styles from './styles.module.css'

const Hero = () => (
  <section id="home" className={styles.hero}>
    <div className={styles.bgCover} style={{backgroundImage: `url(/figma-assets/hero-event@2x.jpg)`}} />
    <div className={styles.overlay} />
    <div className={styles.heroInner}>
      <div className={styles.kickerWrap}>
        <span className={styles.kicker}>Based in Varanasi, Uttar Pradesh</span>
      </div>

      <h1 className={styles.title}>
        <span className={styles.titleBig}>Professional</span>
        <br />
        <span className={styles.titleAccent}>Event<br/>Photography</span>
        <br />
        <span className={styles.titleSub}>&amp; Cinematic<br/>Videography</span>
      </h1>

      <p className={styles.lead}>Capturing corporate events, conferences, and special occasions with cinematic excellence. From Varanasi to destinations across India, we deliver premium visual storytelling.</p>

      <div className={styles.heroCtas}>
        <a className={styles.ctaPrimary} href="#contact">📞 Book Your Event</a>
        <a className={styles.ctaGhost} href="#portfolio">▶ View Portfolio</a>
      </div>

      <div className={styles.heroStats}>
        <div className={styles.stat}><strong>500+</strong><span>Events Captured</span></div>
        <div className={styles.stat}><strong>8+</strong><span>Years Experience</span></div>
        <div className={styles.stat}><strong>98%</strong><span>Happy Clients</span></div>
      </div>
    </div>

    <div className={styles.heroImageWrap}>
      <div className={styles.frame}>
        <img className={styles.heroImage} src="/figma-assets/hero-event@2x.jpg" alt="Event"/>
      </div>

      <div className={styles.badgeTop}>Premium Quality<br/><small>4K Video + RAW Photos</small></div>
      <div className={styles.badgeBottom}>Award Winning<br/><small>Photography Team</small></div>
    </div>

    <div className={styles.decTop} />
    <div className={styles.decBottom} />
  </section>
)

// Stats section removed per request

const Services = () => (
  <section className={styles.services} id="services">
    <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Services</span></h2>
    <div className={styles.servicesGrid}>
      {[
        {title: 'Wedding Photography', items: ['Pre-wedding shoots','Ceremony coverage','Reception highlights','Couple portraits'], icon: '💖', desc: 'Capturing your special day with artistic flair and emotional depth.'},
        {title: 'Corporate Events', items: ['Conference coverage','Team events','Product launches','Award ceremonies'], icon: '🏢', desc: 'Professional documentation of business events, conferences, and corporate milestones.'},
        {title: 'Cinematic Videography', items: ['Wedding films','Event highlights','Promotional videos','Documentary style'], icon: '🎬', desc: 'Creating stunning video stories that capture the essence and emotion of moments.'},
        {title: 'Drone Coverage', items: ['Aerial photography','Venue overviews','Landscape shots','Dynamic sequences'], icon: '🚁', desc: 'Aerial photography and videography adding a unique perspective to your events.'},
        {title: 'Event Photography', items: ['Birthday parties','Anniversaries','Family gatherings','Cultural events'], icon: '📸', desc: 'Comprehensive coverage of birthdays, anniversaries, parties, and special celebrations.'},
        {title: 'Portrait Sessions', items: ['Individual portraits','Family sessions','Professional headshots','Maternity shoots'], icon: '🧑', desc: 'Professional individual and family portraits that showcase personality and style.'},
      ].map(s => (
        <article key={s.title} className={styles.serviceCard}>
          <div className={styles.iconCircle} aria-hidden>
            <span className={styles.icon}>{s.icon}</span>
          </div>
          <h3 className={styles.serviceTitle}>{s.title}</h3>
          <p className={styles.serviceDesc}>{s.desc}</p>
          <ul className={styles.serviceList}>
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
