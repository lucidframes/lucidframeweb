"use client";
import React, { useState } from "react";
import WEBSITE from "@/public/WEBSITE.png";
import Image from "next/image";
import Link from "next/link";
import Threads from "@/public/threads.png";
import Facebook from "@/public/facebook.png";
import Instagram from "@/public/instagram.png";
import LinkedIn from "@/public/linkedin.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
  };

  return (
    <div className="bg-[#181818]  ">
      {/* main */}
      <div className="flex bg-[#181818] mb-10 items-center justify-center">
        {/* main */}
        <div className="xl:flex  md:gap-8 ">
          <div className="p-2 mt-2 hidden lg:block">
            <Image
              src={WEBSITE}
              alt="Lucid Frames Logo"
              width={150}
              height={50}
            />
          </div>
          {/* //text */}
          <div className="md:flex justify-center mt-3 ml-10  gap-8 ">
            <div className=" p-2 text-white">
              <h3 className="font-medium mb-2">Quick Links</h3>
              <ul className="space-y-1 font-extralight">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Our Services</a>
                </li>
                <li>
                  <a href="/case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="/testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className=" p-2 text-white ">
              <h3 className="font-medium mb-2">Resources</h3>
              <ul className="space-y-1 font-extralight">
                <li>
                  <a href="/footer/policies">Privacy Policies</a>
                </li>
                <li>
                  <a href="/footer/terms">Terms of Service</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className=" p-2 text-white ">
              <h3 className="font-medium mb-2">Quick Links</h3>
              <ul className="space-y-1 font-extralight">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Our Services</a>
                </li>
                <li>
                  <a href="/case-studies">Case Studies</a>
                </li>
                <li>
                  <a href="/testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className=" flex justify-center lg:ml-10 mt-4">
              <div className="pt-2">
                <h3 className="text-white mb-2">Subscribe</h3>
                <p className="text-xs mb-3 text-gray-100">
                  Join our newsletter to receive the latest updates.
                </p>
                <form onSubmit={handleSubmit} className="flex gap-2 w-24">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border border-gray-400 rounded-md flex-1 text-gray-50"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-[#7F3BE3] text-white rounded-md"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs mt-2 text-gray-600">
                  By subscribing, you agree to our{" "}
                  <a href="/footer/policies" className="underline">
                    Privacy Policy
                  </a>{" "}
                  <br />
                  and consent to receive updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub */}

      {/* sub */}
      <div className="bg-[#131313]">
        <div className="md:flex  items-center  justify-between  text-sm text-gray-500 px-8 py-4">
          {/* Left - Copyright & Legal Links */}
          <div className="flex flex-wrap items-center gap-4 ">
            <p>© 2025 Lucidframe ads | All rights reserved.</p>
            <a href="/footer/policies" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/footer/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex gap-3 p-5 md:p-0 ">
            <Link href="https://www.instagram.com/lucidframeads">
              <Image src={Instagram} alt="Lucid Frames Logo" width={25} />
            </Link>
            <Link href="/">
              <Image src={Facebook} alt="Lucid Frames Logo" width={25} />
            </Link>
            <Link href="/">
              <Image src={LinkedIn} alt="Lucid Frames Logo" width={25} />
            </Link>
            <Link href="https://www.threads.net/@lucidframeads">
              <Image src={Threads} alt="Lucid Frames Logo" width={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
