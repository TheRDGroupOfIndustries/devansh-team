"use client"
import React, { useState } from 'react'
import styles from './styles.module.css'

export default function ContactClient(){
  const [form, setForm] = useState({name:'',email:'',phone:'',date:'',type:'Wedding',message:''})
  const [submitting, setSubmitting] = useState(false)

  function handleChange(e){
    const {name, value} = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  async function handleSubmit(e){
    e.preventDefault()
    setSubmitting(true)
    try{
      // Placeholder: in a real app you'd POST to an API route or Sanity
      await new Promise(r => setTimeout(r, 700))
      alert('Request sent — (this is a demo)')
      setForm({name:'',email:'',phone:'',date:'',type:'Wedding',message:''})
    }catch(err){
      console.error(err)
      alert('Failed to send')
    }finally{setSubmitting(false)}
  }

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.sectionTitle}>Contact & Booking</h2>
      <div className={styles.contactCols}>
        <div>
          <h3>Get In Touch</h3>
          <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
          <p>Email: <a href="mailto:info@mrdeveshteam.com">info@mrdeveshteam.com</a></p>
          <p>Location: Varanasi, Uttar Pradesh</p>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>Full Name <input name="name" value={form.name} onChange={handleChange} required/></label>
          <label>Email Address <input name="email" type="email" value={form.email} onChange={handleChange} required/></label>
          <label>Phone Number <input name="phone" value={form.phone} onChange={handleChange} required/></label>
          <label>Event Date <input name="date" type="date" value={form.date} onChange={handleChange}/></label>
          <label>Event Type <select name="type" value={form.type} onChange={handleChange}><option>Wedding</option><option>Corporate</option></select></label>
          <label>Message <textarea name="message" maxLength={500} value={form.message} onChange={handleChange}></textarea></label>
          <button className={styles.submit} disabled={submitting}>{submitting? 'Sending...':'Send Booking Request'}</button>
        </form>
      </div>
    </section>
  )
}
