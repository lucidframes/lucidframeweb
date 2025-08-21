export default function AnimatedDotsBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 animate-dots"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" fill="#F1F1F1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}
