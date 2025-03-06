import Image from "next/image";
import ARROW from '@/public/ARROW.png';
import Link from "next/link";

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
           An <span className="font-bold">Advertising Company</span> <br />Creating the Future of Advertising.
        </div>
        <Link href="/contact">
       <div className="flex pt-36 items-center">
        <div className="hidden md:block text-xl font-light  text-white">
          Get in touch
        </div>
        <div className="hidden md:block ml-2 mt-[2px]">
          <Image src={ARROW} alt="Lucid Frames Logo" width={20} height={20} />
        </div>
       </div>
       </Link >
      </div>
      </div>

      <div className=" h-[50vh] md:h-[80vh] md:w-[50vw]">
        
      </div>
    </div>
   </div>
  {/* ribbon */}
  <div className="bg-[#161616]">

  </div>

   </div>

 );
}
