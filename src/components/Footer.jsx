import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGooglePlay, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

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
      label: 'Facebook',
      href: 'https://www.facebook.com/ietehit/',
      icon: FaFacebookF,
    },
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

  const mobileAppLink =
    'https://play.google.com/store/apps/details?id=com.geckosoft.nirbhay.ietemate&hl=en_IN'

  return (
    <footer className="border-t border-white/10 px-4 pt-16 pb-8 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <Link
              to="/"
              className="mb-4 flex w-fit items-center gap-3 text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300/40 bg-slate-100/95 p-1">
                <img
                  src="/logo.png"
                  alt="IETE Logo"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">IETE HIT SF</h3>
                <p className="text-xs text-slate-400">Indian Institute of Electronics and Telecommunication Engineers</p>
              </div>
            </Link>
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

          {/* Stay In Touch */}
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <h4 className="mb-4 text-sm font-semibold text-white">Stay In Touch</h4>
            <div className="mb-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid h-10 w-10 place-content-center rounded-lg border border-white/10 bg-white/5 text-base transition hover:border-cyan-300/60 hover:bg-white/10"
                >
                  <social.icon className="text-lg transition duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                </a>
              ))}
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Mobile App</p>
            <a
              href={mobileAppLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-200/60 hover:bg-emerald-300/15 hover:shadow-[0_0_24px_-10px_rgba(52,211,153,0.8)]"
            >
              <FaGooglePlay className="transition group-hover:scale-110" />
              Get it on Google Play
            </a>
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
