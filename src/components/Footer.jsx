function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 text-sm text-slate-400 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 IETE HIT SF. Crafted for builders and innovators.</p>
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.14em] text-slate-300">
          <a href="#about" className="hover:text-cyan-200">About</a>
          <a href="#events" className="hover:text-cyan-200">Events</a>
          <a href="#team" className="hover:text-cyan-200">Team</a>
          <a href="#contact" className="hover:text-cyan-200">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
