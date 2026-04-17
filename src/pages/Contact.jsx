import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 px-4 md:px-8">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-3">Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact the IETE Team</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions about membership, events, or collaboration? We'd love to hear from you. Reach out using the form below or through our direct contact channels.
          </p>
        </Motion.div>

        <div className="grid gap-10 md:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            {/* Address */}
            <div className="rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-slate-950/80 p-6 backdrop-blur-xl">
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-sm text-slate-300">
                    Ground Floor, ECE Department<br />
                    Haldia Institute of Technology<br />
                    Haldia, West Bengal 721657<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-indigo-300/30 bg-gradient-to-br from-indigo-500/10 via-slate-900/50 to-slate-950/80 p-6 backdrop-blur-xl">
              <div className="flex gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a 
                    href="mailto:ietehitsf@gmail.com"
                    className="text-indigo-300 hover:text-indigo-200 transition font-medium"
                  >
                    ietehitsf@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Our Community</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-cyan-300">300+</p>
                  <p className="text-xs text-slate-400">Active Members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-300">42+</p>
                  <p className="text-xs text-slate-400">Events/Year</p>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-8 backdrop-blur-xl space-y-6"
            >
              {/* Success Message */}
              {submitted && (
                <Motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg border border-emerald-300/40 bg-emerald-300/10 px-4 py-3 text-sm text-emerald-200"
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </Motion.div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Aayush Pathak"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Motion.button
                type="submit"
                disabled={loading || submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-300 px-6 py-3 text-base font-semibold text-slate-950 transition disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-300/50"
              >
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </Motion.button>

              {/* Back Button */}
              <button
                type="button"
                onClick={() => navigate('/')}
                className="w-full rounded-lg border border-slate-600 bg-transparent px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-400 hover:bg-slate-800/50"
              >
                Back to Home
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
