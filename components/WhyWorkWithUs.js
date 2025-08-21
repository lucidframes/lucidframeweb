'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function WhyWorkWithUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const sectionRef = useRef(null)

  // Mouse-follow radial gradient background (InteractiveGradient-style)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const MAX_RADIUS = 420
    const EASE = 0.12

    const target = { x: 0, y: 0, r: 0 }
    const current = { x: 0, y: 0, r: 0 }

    function setFromEvent(e) {
      const rect = el.getBoundingClientRect()
      target.x = e.clientX - rect.left
      target.y = e.clientY - rect.top
    }
    function handleEnter(e) {
      setFromEvent(e)
      target.r = MAX_RADIUS
    }
    function handleMove(e) {
      setFromEvent(e)
    }
    function handleLeave() {
      target.r = 0
    }

    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    window.addEventListener('blur', handleLeave)

    let frame
    function animate() {
      current.x += (target.x - current.x) * EASE
      current.y += (target.y - current.y) * EASE
      current.r += (target.r - current.r) * EASE

      if (current.r > 1) {
        el.style.background = `radial-gradient(${current.r}px at ${current.x}px ${current.y}px, #541f99 0%, #311457 45%, #181818 100%)`
      } else {
        el.style.background = '#181818'
      }

      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('blur', handleLeave)
    }
  }, [])

  const reasons = [
    {
      title: 'Creative Expertise',
      desc: 'We bring bold ideas to life with fresh and innovative designs.',
    },
    {
      title: 'Tailored Strategies',
      desc: 'Every solution is customized to fit your unique business goals.',
    },
    {
      title: 'End-to-End Support',
      desc: 'From concept to execution, we’re with you at every step.',
    },
    {
      title: 'Proven Impact',
      desc: 'Our work delivers measurable results that drive growth.',
    },
  ]

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center h-full w-full text-[#F1F1F1] text-center px-4 sm:px-6 py-6 sm:py-0 transition-colors duration-300 ease-out overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#7F3BE3] to-[#6e15f3] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Work With Us ?
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl w-full">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer relative
              ${
                hoveredIndex === i
                  ? 'bg-white/10 backdrop-blur-md border-[#7F3BE3]'
                  : 'bg-[#1f1f1f] border-[#2a2a2a]'
              }`}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#F1F1F1] mb-2">
              {reason.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300">{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
