function SectionWrapper({ id, className = '', children }) {
  return (
    <section id={id} className={`px-4 py-20 md:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

export default SectionWrapper
