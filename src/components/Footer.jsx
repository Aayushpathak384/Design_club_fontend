import { motion as Motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Resources: [
      { label: 'Events', href: '#events' },
      { label: 'Workshops', href: '#domains' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Team', href: '#team' },
    ],
    Community: [
      { label: 'About IETE', href: '#about' },
      { label: 'Join Us', href: '#join' },
      { label: 'Contact', href: '#contact' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
    Learn: [
      { label: 'Web Development', href: '#domains' },
      { label: 'Robotics & IoT', href: '#domains' },
      { label: 'Competitive Programming', href: '#domains' },
      { label: 'UI/UX Design', href: '#domains' },
    ],
  }

  const socialLinks = [
    { label: 'LinkedIn', icon: '📘', href: '#' },
    { label: 'GitHub', icon: '🐙', href: '#' },
    { label: 'Instagram', icon: '📸', href: '#' },
    { label: 'Email', icon: '✉️', href: 'mailto:ietehitsf@gmail.com' },
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
              <div>
                <h3 className="text-lg font-bold text-white">IETE HIT SF</h3>
                <p className="text-xs text-slate-400">Indian Institute of Electronics and Telecommunication Engineers</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              A thriving community of innovators, builders, and learners fostering technical excellence and collaboration at HIT Haldia.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-base transition hover:bg-white/10 hover:border-cyan-300/60"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Motion.div>

          {/* Footer Links Columns */}
          {Object.entries(footerLinks).map(([ category, links ], idx) => (
            <Motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: (idx + 1) * 0.08 }}
            >
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-cyan-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>

        {/* Contact Info Section */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="grid gap-6 md:grid-cols-2 mb-8 p-6 rounded-xl border border-white/10 bg-slate-900/50"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 mb-2">Address</p>
            <p className="text-sm text-slate-200">
              Ground Floor, ECE Department<br />
              Haldia Institute of Technology, Haldia<br />
              West Bengal 721657, India
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 mb-2">Contact</p>
            <p className="text-sm text-slate-200">
              Email: <a href="mailto:ietehitsf@gmail.com" className="text-cyan-300 hover:text-cyan-200">ietehitsf@gmail.com</a><br />
              Phone: +91 (0) XXXX XXX XXX
            </p>
          </div>
        </Motion.div>

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
