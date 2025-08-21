import Image from 'next/image'
import ARROW from '@/public/ARROW.png'
import Link from 'next/link'
import LOGO1 from '@/public/logo1.png'
import LOGO2 from '@/public/logo2.png'
import VideoAdArtBlock from '@/components/Vector'
import AnimatedDotsBackground from '@/components/AnimatedDotsBackground'
import WhyWorkWithUs from '@/components/WhyWorkWithUs'
export default function Home() {
  return (
    <div>
      {/* first page */}
      <div className=" w-screen h-screen md:h-[80vh] bg-[#7F3BE3]">
        <div className="md:flex md:mx-5 lg:mx-20  ">
          <div className=" h-[50vh] md:h-[80vh] md:w-[50vw] flex items-center justify-center ">
            <div className="pt-56 md:pt-20">
              <div className="text-5xl md:text-6xl font-bold text-white">
                Advertising
              </div>
              <div className=" text-3xl md:text-4xl font-bold  text-white">
                Beyond <span className="text-[#181818]">Tomorrow.</span>
              </div>
              <div className="hidden md:block text-2xl   pt-8 text-white">
                An <span className="font-bold">Advertising Company</span> <br />
                Creating the Future of Advertising.
              </div>
              <Link href="/contact">
                <div className="flex pt-36 items-center">
                  <div className="hidden md:block text-xl font-light  text-white">
                    Get in touch
                  </div>
                  <div className="hidden md:block ml-2 mt-[2px]">
                    <Image
                      src={ARROW}
                      alt="Lucid Frames Logo"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex h-[50vh] md:h-[80vh] md:w-[50vw] justify-center">
            <VideoAdArtBlock />
            {/* <video loop autoPlay muted className="md:w-3/4 lg:w-9/12">
              <source src="/sample.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </div>
      </div>
      {/* ribbon */}
      <div className="flex  ">
        <div className="flex justify-center px-10 items-center bg-[#151515] h-[20vh] w-[50vw]">
          <div className="pb-3">
            <Link href="/">
              <Image src={LOGO1} alt="Lucid Frames Logo" width={130} />
            </Link>
          </div>
          <div className="hidden md:block text-[#ffffff] hover:text-[#6e15f3] animate">
            <Link href="/">VIDEO PRODUCTION</Link>
          </div>
        </div>
        <div className="flex justify-center px-10 items-center bg-[#141414] h-[20vh] w-[50vw]">
          <div>
            <Link href="/">
              <Image
                src={LOGO2}
                alt="Lucid Frames Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="hidden md:block text-[#ffffff] hover:text-[#6e15f3] animate">
            <Link href="/">ADVERTISING</Link>
          </div>
        </div>
      </div>

      {/* nextpage */}
      <div className="bg-[#161616] w-[100vw] h-screen"></div>
      <div className="bg-[#181818] w-[100vw] h-[70vh] md:h-[60vh]">
        <WhyWorkWithUs />
      </div>

      <div className="relative flex flex-col gap-6 bg-[#7F3BE3] w-[100vw] h-[40vh] text-[#F1F1F1] text-xl md:text-3xl italic text-center items-center justify-center overflow-hidden">
        {/* Background */}
        <AnimatedDotsBackground />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <p>
            "Let’s Create Something Brilliant
            <span className="font-bold"> Together.</span>"
          </p>
          <p className="text-sm md:text-2xl opacity-80">
            Your vision, our craft. let’s make it real.
          </p>

          <Link
            href="/contact"
            className="px-4 py-2 bg-[#F1F1F1] text-[#7F3BE3] rounded-lg text-sm font-medium hover:bg-[#eaeaea] transition-colors duration-300"
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </div>
  )
}
