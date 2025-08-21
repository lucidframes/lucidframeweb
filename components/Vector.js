'use client'

import { motion } from 'framer-motion'

export default function VideoAdArtBlock() {
  return (
    <div className="flex h-full w-full justify-center items-center bg-[#7F3BE3] overflow-hidden rounded-2xl">
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={`ring-${i}`}
            cx="600"
            cy="400"
            r={50 + i * 35}
            fill="none"
            stroke="#F1F1F1"
            strokeWidth={1 + i * 0.2}
            opacity={0.1 + i * 0.07}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 2 + i * 0.15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1,
            }}
          />
        ))}

        {[...Array(6)].map((_, i) => (
          <motion.polygon
            key={`poly-${i}`}
            points="600,300 660,350 660,450 600,500 540,450 540,350"
            fill="none"
            stroke="#F1F1F1"
            strokeWidth="1.5"
            opacity={0.2 + i * 0.1}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 25 - i * 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            transform={`scale(${1 + i * 0.25})`}
            transformOrigin="600 400"
          />
        ))}

        {[...Array(40)].map((_, i) => (
          <motion.circle
            key={`star-${i}`}
            cx={600 + Math.cos((i / 40) * Math.PI * 2) * (180 + (i % 5) * 10)}
            cy={400 + Math.sin((i / 40) * Math.PI * 2) * (180 + (i % 5) * 10)}
            r="2"
            fill="#F1F1F1"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            transformOrigin="600 400"
          />
        ))}

        <motion.circle
          cx="600"
          cy="400"
          r="30"
          fill="#F1F1F1"
          filter="url(#glow)"
          animate={{ r: [30, 45, 30] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </motion.svg>
    </div>
  )
}
