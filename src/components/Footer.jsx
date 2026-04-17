import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/iete-students-forum-hit-haldia-iete/',
      icon: FaLinkedinIn,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/iete_hit_haldia/?hl=en',
      icon: FaInstagram,
    },
  ]

  return (
    <footer className="border-t border-white/10 px-4 pt-16 pb-8 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand Section */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://iete-frontend.onrender.com/images/iete.ico"
                alt="IETE Logo"
                className="h-10 w-10 rounded-lg border border-white/20 bg-white/90 object-contain p-1"
                loading="lazy"
              />
              <Link to="/" className="transition hover:text-cyan-300">
                <h3 className="text-lg font-bold text-white">IETE HIT SF</h3>
              </Link>
              <p className="text-xs text-slate-400">Indian Institute of Electronics and Telecommunication Engineers</p>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              A thriving community of innovators, builders, and learners fostering technical excellence and collaboration at HIT Haldia.
            </p>
            <p className="text-sm text-slate-400">
              📍 Ground Floor, ECE Department, HIT Haldia<br />
              ✉️ <a href="mailto:ietehitsf@gmail.com" className="text-cyan-300 transition hover:text-cyan-200">ietehitsf@gmail.com</a>
            </p>
          </Motion.div>

          {/* Footer Links Columns */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href === '/contact' ? (
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 transition hover:text-cyan-300 hover:underline hover:underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-cyan-300 hover:underline hover:underline-offset-4"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Social Links */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <h4 className="text-sm font-semibold text-white mb-4">Social Links</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="group h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-base transition hover:bg-white/10 hover:border-cyan-300/60"
                >
                  <social.icon className="text-lg transition duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                </a>
              ))}
            </div>
          </Motion.div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} IETE Student Forum, HIT. All rights reserved. Crafted with 💜 for builders and innovators.
          </p>
          <div className="flex gap-4 text-xs text-slate-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
