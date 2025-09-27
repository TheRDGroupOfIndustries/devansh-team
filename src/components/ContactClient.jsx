// "use client"
// import React, { useState, useRef } from 'react'
// import styles from './styles.module.css'

// export default function ContactClient(){
//   const [form, setForm] = useState({name:'',email:'',phone:'',date:'',type:'',venue:'',guests:'',budget:'',services:[],message:''})
//   const [submitting, setSubmitting] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [success, setSuccess] = useState(null)
//   const [result, setResult] = useState(null)
//   const [source, setSource] = useState(null)
//   const bannerRef = useRef(null)

//   function handleChange(e){
//     const {name, value, type, checked} = e.target
//     if(name === 'services'){
//       // checkbox list
//       setForm(prev => {
//         const next = new Set(prev.services || [])
//         if(checked) next.add(value)
//         else next.delete(value)
//         return {...prev, services: Array.from(next)}
//       })
//       return
//     }
//     setForm(prev => ({...prev, [name]: value}))
//     setErrors(prev => ({...prev, [name]: undefined}))
//   }

//   async function handleSubmit(e){
//     e.preventDefault()
//     setSubmitting(true)
//     setErrors({})
//     setSuccess(null)
//     try{
//   // Client-side validation to give immediate feedback (mirror server Zod rules)
//   const clientErrors = {}
//   if (!form.name || form.name.trim().length < 2) clientErrors.name = 'Name must be at least 2 characters'
//   const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   if (!form.email || !emailRe.test(form.email)) clientErrors.email = 'Invalid email address'
//   const digits = (form.phone || '').replace(/\D/g, '')
//   if (!form.phone || digits.length < 6) clientErrors.phone = 'Enter a valid phone number'
//   if (!form.type || String(form.type).trim() === '') clientErrors.type = 'Select an event type'
//   if (Object.keys(clientErrors).length > 0) {
//     setErrors(clientErrors)
//     setSubmitting(false)
//     return
//   }

//   const payload = { ...form }
//   // Use AbortController to avoid hanging fetches
//   const controller = new AbortController()
//   const timeout = setTimeout(() => controller.abort(), 10000)
//   try{
//   const apiUrl = (typeof window !== 'undefined' && window.location ? `${window.location.origin}/api/contact` : '/api/contact')
//   const res = await fetch(apiUrl, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload), signal: controller.signal })
//     clearTimeout(timeout)
//     let data = null
//     try{ data = await res.json() } catch(e){
//       // non-JSON response
//       console.error('Non-JSON response from /api/contact', e)
//     }

//     if (!res.ok) {
//       // server-side validation errors from Zod come in data.errors
//       if (data?.errors?.fieldErrors) {
//         // normalize arrays to strings for easier rendering
//         const normalized = Object.fromEntries(Object.entries(data.errors.fieldErrors).map(([k,v]) => [k, Array.isArray(v) ? v.filter(Boolean).join(', ') : v]))
//         setErrors(normalized)
//       } else {
//         const msg = (data && (data.error || data.message)) || `Submission failed (${res.status} ${res.statusText})`
//         setErrors({form: msg})
//       }
//       setSubmitting(false)
//       return
//     }

//     // success — show API source if provided
//     const src = data?.source || 'unknown'
//     setSuccess(` booking request was received.`)
//     setSource(src)
//     setResult(data?.entry || null)
//   // reset all fields to initial state
//   setForm({name:'',email:'',phone:'',date:'',type:'',venue:'',guests:'',budget:'',services:[],message:''})
//     // scroll to banner so user sees the result
//     setTimeout(()=>{
//       if(bannerRef.current){ bannerRef.current.scrollIntoView({behavior:'smooth', block:'center'}) }
//     }, 50)
//   } catch (err) {
//     if (err.name === 'AbortError') {
//       setErrors({form: 'Request timed out. Try again.'})
//     } else {
//       console.error('Network error on /api/contact', err)
//       // Provide a clearer message for the user and keep detailed error in console
//       setErrors({form: err.message ? `Network error: ${err.message}` : 'Failed to send. Try again later.'})
//     }
//   } finally {
//     clearTimeout(timeout)
//   }
//     }catch(err){
//       console.error(err)
//       setErrors({form: 'Failed to send. Try again later.'})
//     }finally{setSubmitting(false)}
//   }

//   return (
//     <section className={styles.contact} id="contact">
//       <h2 className={styles.sectionTitle}>Contact & <span className={styles.highlight}>Booking</span></h2>
//       <p className={styles.contactLead}>Ready to capture your special moments? Get in touch with us to discuss your requirements and receive a personalized quote.</p>

//       <div className={styles.contactGrid}>
//         <aside className={styles.contactCard}>
//           <h3>Get In Touch</h3>
//           <div className={styles.contactItemRow}>
//             <div className={`${styles.iconBox} ${styles.iconPhone}`}><i className="ri-phone-fill text-white text-xl"></i></div>
//             <div>
//               <div className={styles.contactLabel}>Phone</div>
//               <div className={styles.contactText}><a href="tel:+919876543210">+91 98765 43210</a><br/><a href="tel:+918765432109">+91 87654 32109</a></div>
//             </div>
//           </div>

//           <div className={styles.contactItemRow}>
//             <div className={`${styles.iconBox} ${styles.iconEmail}`}>✉️</div>
//             <div>
//               <div className={styles.contactLabel}>Email</div>
//               <div className={styles.contactText}><a href="mailto:info@mrdeveshteam.com">info@mrdeveshteam.com</a><br/><a href="mailto:bookings@mrdeveshteam.com">bookings@mrdeveshteam.com</a></div>
//             </div>
//           </div>

//           <div className={styles.contactItemRow}>
//             <div className={`${styles.iconBox} ${styles.iconPlace}`}><i className="ri-map-pin-fill text-white text-xl"></i></div>
//             <div>
//               <div className={styles.contactLabel}>Location</div>
//               <div className={styles.contactText}>Varanasi, Uttar Pradesh<br/>Serving Pan India</div>
//             </div>
//           </div>

//           <hr className={styles.contactDivider} />
//           <div className={styles.quickContactHeading}>Quick Contact</div>
//           <div className={styles.quickContact}>
//             <a className={styles.whatsapp} href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"> <i className="ri-whatsapp-fill mr-2"></i> WhatsApp</a>
//             <a className={styles.callNow} href="tel:+919876543210"><i className="ri-phone-fill mr-2"></i>  Call Now</a>
//           </div>

          
//           <div className={styles.mapWrap}>
//             {/* Google Maps embed centered on Varanasi */}
//             <iframe
//               title="map"
//               src="https://www.google.com/maps?q=Varanasi,+Uttar+Pradesh&output=embed"
//               style={{marginTop:250 ,border:0, width:'100%', height:200, borderRadius:0}}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
        
//         </aside>
        
//         <form className={`${styles.bookingCard} ${submitting ? styles.disabledForm : ''}`} onSubmit={handleSubmit} noValidate>
//           <h3>Book Your Session</h3>
//           {errors.form && <div style={{marginBottom:12, color:'crimson'}}>{errors.form}</div>}
//           {success && <div ref={bannerRef} className={`${styles.resultBanner} ${source==='local'?styles.resultLocal:styles.resultSuccess}`}>{success} {source && <strong>({source})</strong>}</div>}
//           {result && <div style={{fontSize:13, color:'#0f172a', marginBottom:12}}>Submission id: <code style={{background:'#fff', padding:'2px 6px', borderRadius:6}}>{result._id || result.id}</code></div>}
//           <div className={styles.formGrid}>
//             <label>
//               Full Name
//               <input name="name" value={form.name} onChange={handleChange} required/>
//               {errors.name && <small className={styles.formNote}>{errors.name}</small>}
//             </label>

//             <label>
//               Email Address
//               <input name="email" type="email" value={form.email} onChange={handleChange} required/>
//               {errors.email && <small className={styles.formNote}>{errors.email}</small>}
//             </label>

//             <label>
//               Phone Number
//               <input name="phone" value={form.phone} onChange={handleChange} required/>
//               {errors.phone && <small className={styles.formNote}>{errors.phone}</small>}
//             </label>

//             <label>
//               Event Date
//               <input name="date" type="date" value={form.date} onChange={handleChange} />
//             </label>

//             <label>
//               Event Type *
//               <select name="type" value={form.type} onChange={handleChange}>
//                 <option value="">Select event type</option>
//                 <option>Wedding</option>
//                 <option>Engagement</option>
//                 <option>Corporate Event</option>
//                 <option>Birthday Party</option>
//                 <option>Anniversary</option>
//                 <option>Portrait Session</option>
//                 <option>Other</option>
//               </select>
//               {errors.type && <small className={styles.formNote}>{errors.type}</small>}
//             </label>

//             <label>
//               Venue
//               <input name="venue" value={form.venue || ''} onChange={handleChange} />
//             </label>
//           </div>

//           <div className={styles.rowTwoCols}>
//             <div>
//               <label>
//                 Expected Guest Count
//                 <select name="guests" value={form.guests} onChange={handleChange}>
//                   <option value="">Select guest count</option>
//                   <option>Under 50</option>
//                   <option>50-200</option>
//                   <option>200-500</option>
//                   <option>500+</option>
//                 </select>
//               </label>
//             </div>

//             <div>
//               <label>
//                 Budget Range
//                 <select name="budget" value={form.budget} onChange={handleChange}>
//                   <option value="">Select budget range</option>
//                   <option>Under ₹50k</option>
//                   <option>₹50k-2L</option>
//                   <option>₹2L-5L</option>
//                   <option>5L+</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <fieldset className={styles.servicesGrid}>
//             <legend>Services Required</legend>
//             {['Wedding Photography','Wedding Videography','Corporate Events','Birthday Parties','Portrait Sessions','Drone Coverage','Event Highlights','Product Photography'].map(s => (
//               <label key={s} className={styles.serviceCheck}><input type="checkbox" name="services" value={s} checked={(form.services||[]).includes(s)} onChange={handleChange}/> {s}</label>
//             ))}
//           </fieldset>

//           {/* Make the message full-width below the services */}
//           <div className={styles.fullWidthBlock}>
//             <label>
//               Additional Message
//               <textarea name="message" maxLength={500} value={form.message} onChange={handleChange}></textarea>
//               <div className={styles.charCount}>{form.message.length}/500 characters</div>
//               {errors.message && <small className={styles.formNote}>{errors.message}</small>}
//             </label>
//           </div>

//           <div style={{display:'flex', justifyContent:'flex-end', gap:12, marginTop:12}}>
//             {errors.form && <div style={{color:'crimson'}}>{errors.form}</div>}
//             {success && <div style={{color:'green'}}>{success}</div>}
//           </div>

//           <button type="submit" aria-busy={submitting} className={styles.bookBtn} disabled={submitting}>
//             <span className={styles.btnIcon} aria-hidden="true">
//               <i className="ri-send-plane-fill mr-2"></i>
//             </span>
//             {submitting? 'Sending...':'Send Booking Request'}
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }
