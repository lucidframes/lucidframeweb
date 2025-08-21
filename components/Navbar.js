'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WEBSITE from '@/public/WEBSITE.png'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState) // Toggle the menu state (open/close)
  }

  return (
    <nav className="w-full fixed top-0 bg-[#181818] z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={WEBSITE}
            alt="Lucid Frames Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-[#7F3BE3] text-[#F1F1F1] py-1">
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-[#7F3BE3] text-[#F1F1F1] py-1"
          >
            Services
          </Link>
          {/* <Link
            href="/portfolio"
            className="hover:text-[#7F3BE3] text-[#F1F1F1] py-1"
          >
            Portfolio
          </Link> */}
          <Link
            href="/about"
            className="hover:text-[#7F3BE3] text-[#F1F1F1] py-1"
          >
            About
          </Link>
          <div className="ml-5 mr-4">
            <Link href="/contact">
              <button className="bg-[#7F3BE3] text-white py-1 px-3  rounded-lg hover:bg-[#6c2ec8] font-semibold  transition duration-300">
                QUOTE NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-white font-bold"
          >
            {isOpen ? '✖' : '☰'}{' '}
            {/* Show '✖' when the menu is open, and '☰' when it's closed */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#181818] h-screen"
          initial={{ opacity: 0, y: '5%' }} // Starts off-screen from the top
          animate={{ opacity: 1, y: 0 }} // Slides in from the top to its normal position
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        >
          <Link
            href="/"
            className="text-[#F1F1F1] block p-5 hover:text-[#7F3BE3] text-center"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-[#F1F1F1] block p-5 hover:text-[#7F3BE3] text-center"
          >
            Services
          </Link>
          {/* <Link
            href="/portfolio"
            className="text-[#F1F1F1] block p-5 hover:text-[#7F3BE3] text-center"
          >
            Portfolio
          </Link> */}
          <Link
            href="/about"
            className="text-[#F1F1F1] block p-5 hover:text-[#7F3BE3] text-center"
          >
            About
          </Link>
          <div className="text-center mt-20">
            <Link href="/contact">
              <button className="bg-[#7F3BE3] text-white py-1 px-3  rounded-lg hover:bg-[#6c2ec8] font-semibold transition duration-300">
                QUOTE NOW
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
