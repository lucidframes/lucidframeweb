'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import InteractiveGradient from '@/components/Gradient'

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[40vh] bg-[#181818] px-4 text-center">
        <div className="h-[20vh]"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#F1F1F1] mb-2">
          We Don’t Just Run Ads
        </h1>
        <h2 className="text-2xl md:text-3xl text-[#7F3BE3] font-medium">
          <Typewriter
            words={[
              'We Craft Stories That Stick',
              'We Build Brands That Last',
              'We Design with Strategy',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
      <div className="flex flex-col items-center  h-[60vh] bg-[#181818] px-4  text-center ">
        <p className="text-[#F1F1F1] text-xl md:text-2xl m-4 md:m-28 lg:text-4xl ">
          <span className="text-[#7F3BE3] font-bold">Lucidframe</span> is a
          creative advertising agency built for brands that want to make an
          impact. We blend storytelling, design, and data to create campaigns
          that don’t just look good, they perform. Born out of a passion for
          bold visuals and smart strategies, we’re here to help you frame your
          brand clearly, creatively, and effectively in a world full of noise.
        </p>
      </div>
      <div className="flex flex-col lg:h-[60vh]  justify-center bg-[#191919]">
        <InteractiveGradient />
      </div>
      <div className="flex h-[40vh] bg-[#161616] text-[#F1F1F1] text-xl md:text-3xl italic mx-5 md:mx-10 lg:mx-28 text-center items-center justify-center">
        "We don't chase trends,we create movements. Every brand we touch is a
        story worth telling, and we’re here to tell it with bold clarity and
        creative fire."
      </div>
    </div>
  )
}

export default page
