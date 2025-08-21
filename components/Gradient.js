'use client'
import { useEffect, useRef } from 'react'

export default function InteractiveGradient() {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    /* ---- CONFIG -------------------------------------------------------- */
    const MAX_RADIUS = 600 // final size of the glow
    const EASE = 0.12 // 0 – 1 ; smaller = more lag
    /* ------------------------------------------------------------------- */

    // live values that we tween towards
    const target = { x: 0, y: 0, r: 0 }
    // current values displayed
    const current = { x: 0, y: 0, r: 0 }

    /* ---------- Event Handlers ----------------------------------------- */
    function setCoordsFromEvent(e) {
      const rect = el.getBoundingClientRect()
      target.x = e.clientX - rect.left
      target.y = e.clientY - rect.top
    }

    function handleEnter(e) {
      setCoordsFromEvent(e)
      target.r = MAX_RADIUS // start growing
    }

    function handleMove(e) {
      setCoordsFromEvent(e) // just update x & y
    }

    function handleLeave() {
      target.r = 0 // shrink & vanish
    }

    el.addEventListener('mouseenter', handleEnter)
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    window.addEventListener('blur', handleLeave) // pointer leaves page / tab

    /* ---------- Animation Loop (lag + easing) --------------------------- */
    let frame
    function animate() {
      // ease each property toward its target
      current.x += (target.x - current.x) * EASE
      current.y += (target.y - current.y) * EASE
      current.r += (target.r - current.r) * EASE

      if (current.r > 1) {
        el.style.background = `
          radial-gradient(
            ${current.r}px at ${current.x}px ${current.y}px,
            #7F3BE3 0%,
            #151515 100%
          )
        `
      } else {
        el.style.background = '#151515' // idle base colour
      }

      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    /* ---------- Cleanup ------------------------------------------------- */
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('blur', handleLeave)
    }
  }, [])

  /* ---------- JSX ------------------------------------------------------ */
  return (
    <div
      ref={wrapperRef}
      className="w-full h-[130vh] md:h-screen transition-colors duration-300 ease-out select-none "
    >
      <div className="flex justify-center mt-10 md:mt-20 text-2xl md:text-4xl font-bold text-[#F1F1F1] mb-2">
        Our mission
      </div>
      <div className="lg:flex mx-20 lg:mx-28 my-10">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-6 rounded-2xl lg:w-[25vw] mx-auto mt-20 text-white hover:scale-110 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-2">Strategic Planning</h2>
          <p className="text-sm text-white/80 break-words">
            We develop comprehensive advertising plans that align with your
            business objectives, ensuring every campaign is strategically sound
            and results-oriented.
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-6 rounded-2xl lg:w-[25vw] mx-auto mt-20 text-white hover:scale-110 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-2">Client-Centric Approach</h2>
          <p className="text-sm text-white/80 break-words">
            We prioritize our clients’ needs, fostering collaborative
            partnerships and providing personalized attention throughout the
            entire process.
          </p>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-6 rounded-2xl lg:w-[25vw] mx-auto mt-20 text-white hover:scale-110 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-2">Creative Excellence</h2>
          <p className="text-sm text-white/80 break-words">
            Our team of talented creatives brings fresh ideas and innovative
            concepts to every project, delivering visually stunning and
            impactful campaigns.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
