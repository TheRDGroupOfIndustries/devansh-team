"use client"
import React, { useState, useRef } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    type: "",
    venue: "",
    guests: "",
    budget: "",
    services: [],
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(null)
  const [result, setResult] = useState(null)
  const [source, setSource] = useState(null)
  const bannerRef = useRef(null)

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    if (name === "services") {
      setForm((prev) => {
        const next = new Set(prev.services || [])
        if (checked) next.add(value)
        else next.delete(value)
        return { ...prev, services: Array.from(next) }
      })
      return
    }
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setErrors({})
    setSuccess(null)

    try {
      // client-side validation
      const clientErrors = {}
      if (!form.name || form.name.trim().length < 2) clientErrors.name = "Name must be at least 2 characters"
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email || !emailRe.test(form.email)) clientErrors.email = "Invalid email address"
      const digits = (form.phone || "").replace(/\D/g, "")
      if (!form.phone || digits.length < 6) clientErrors.phone = "Enter a valid phone number"
      if (!form.type || String(form.type).trim() === "") clientErrors.type = "Select an event type"

      if (Object.keys(clientErrors).length > 0) {
        setErrors(clientErrors)
        setSubmitting(false)
        return
      }

      const payload = { ...form }
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 10000)

      try {
        const apiUrl =
          typeof window !== "undefined" && window.location
            ? `${window.location.origin}/api/contact`
            : "/api/contact"

        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        })

        clearTimeout(timeout)
        let data = null
        try {
          data = await res.json()
        } catch (e) {
          console.error("Non-JSON response from /api/contact", e)
        }

        if (!res.ok) {
          if (data?.errors?.fieldErrors) {
            const normalized = Object.fromEntries(
              Object.entries(data.errors.fieldErrors).map(([k, v]) => [
                k,
                Array.isArray(v) ? v.filter(Boolean).join(", ") : v,
              ])
            )
            setErrors(normalized)
          } else {
            const msg =
              (data && (data.error || data.message)) ||
              `Submission failed (${res.status} ${res.statusText})`
            setErrors({ form: msg })
          }
          setSubmitting(false)
          return
        }

        const src = data?.source || "unknown"
        setSuccess("Booking request was received.")
        setSource(src)
        setResult(data?.entry || null)

        // reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          date: "",
          type: "",
          venue: "",
          guests: "",
          budget: "",
          services: [],
          message: "",
        })

        setTimeout(() => {
          if (bannerRef.current) {
            bannerRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
          }
        }, 50)
      } catch (err) {
        if (err.name === "AbortError") {
          setErrors({ form: "Request timed out. Try again." })
        } else {
          console.error("Network error on /api/contact", err)
          setErrors({
            form: err.message ? `Network error: ${err.message}` : "Failed to send. Try again later.",
          })
        }
      } finally {
        clearTimeout(timeout)
      }
    } catch (err) {
      console.error(err)
      setErrors({ form: "Failed to send. Try again later." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact &{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Booking
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to capture your special moments? Get in touch with us to discuss your requirements and
              receive a personalized quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+919876543210">+91 98765 43210</a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+918765432109">+91 87654 32109</a>
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@mrdeveshteam.com">info@mrdeveshteam.com</a>
                      </p>
                      <p className="text-gray-600">
                        <a href="mailto:bookings@mrdeveshteam.com">bookings@mrdeveshteam.com</a>
                      </p>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-fill text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">Varanasi, Uttar Pradesh</p>
                      <p className="text-gray-600">Serving Pan India</p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Contact</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <i className="ri-whatsapp-fill mr-2"></i> WhatsApp
                    </a>
                    <a
                      href="tel:+919876543210"
                      className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer"
                    >
                      <i className="ri-phone-fill mr-2"></i> Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Varanasi,+Uttar+Pradesh&output=embed"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Session</h3>

              {errors.form && <div className="mb-4 text-red-600">{errors.form}</div>}
              {success && (
                <div
                  ref={bannerRef}
                  className={`mb-4 px-4 py-3 rounded-lg ${
                    source === "local" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                  }`}
                >
                  {success} {source && <strong>({source})</strong>}
                </div>
              )}
              {result && (
                <div className="text-sm text-gray-700 mb-4">
                  Submission id:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">{result._id || result.id}</code>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className={submitting ? "opacity-50 pointer-events-none" : ""}>
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                      placeholder="Enter your full name"
                      type="text"
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Date */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Event Type + Venue */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Event Type *</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    >
                      <option value="">Select event type</option>
                      <option>Wedding</option>
                      <option>Engagement</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Anniversary</option>
                      <option>Portrait Session</option>
                      <option>Other</option>
                    </select>
                    {errors.type && <p className="text-xs text-red-600 mt-1">{errors.type}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Venue</label>
                    <input
                      name="venue"
                      value={form.venue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                      placeholder="Event venue"
                    />
                  </div>
                </div>

                {/* Guests + Budget */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Expected Guest Count</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    >
                      <option value="">Select guest count</option>
                      <option>Under 50</option>
                      <option>50-200</option>
                      <option>200-500</option>
                      <option>500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
                    >
                      <option value="">Select budget range</option>
                      <option>Under ₹50k</option>
                      <option>₹50k-2L</option>
                      <option>₹2L-5L</option>
                      <option>5L+</option>
                    </select>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Services Required</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Wedding Photography",
                      "Wedding Videography",
                      "Corporate Events",
                      "Birthday Parties",
                      "Portrait Sessions",
                      "Drone Coverage",
                      "Event Highlights",
                      "Product Photography",
                    ].map((service) => (
                      <label key={service} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={(form.services || []).includes(service)}
                          onChange={handleChange}
                          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-sm resize-vertical"
                    placeholder="Tell us more about your event..."
                  />
                  <p className="text-xs text-gray-500 mt-1">{form.message.length}/500 characters</p>
                  {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="font-semibold rounded-lg transition-all duration-300 cursor-pointer 
                    bg-gradient-to-r from-red-600 to-red-700 text-white 
                    hover:from-red-700 hover:to-red-800 
                    shadow-lg hover:shadow-xl 
                    px-8 py-4 text-lg w-full flex items-center justify-center"
                >
                  <i className="ri-send-plane-fill mr-2"></i>
                  {submitting ? "Sending..." : "Send Booking Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
