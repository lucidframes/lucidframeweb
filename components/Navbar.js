'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WEBSITE from '@/public/WEBSITE.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 bg-[#181818] border-b-2 border-gray-700 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image src={WEBSITE} alt="Lucid Frames Logo" width={150} height={50} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-blue-600">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link href="/" className="block p-4 hover:bg-blue-100">
            Home
          </Link>
          <Link href="/services" className="block p-4 hover:bg-blue-100">
            Services
          </Link>
          <Link href="/portfolio" className="block p-4 hover:bg-blue-100">
            Portfolio
          </Link>
          <Link href="/contact" className="block p-4 hover:bg-blue-100">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
