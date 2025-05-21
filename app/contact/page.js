"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      sector: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#181818] px-4 py-16 text-[#F1F1F1]">
      <h1 className="text-4xl  mb-12 mt-20 text-[#7F3BE3]">
        Got a <span className="font-bold italic">Vision?</span> Let’s Bring It
        to <span className="font-bold italic">Life.</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#222222] p-8 rounded-3xl shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-3xl border border-gray-600 bg-[#2a2a2a] px-4 py-3 text-[#F1F1F1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F3BE3]"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-3xl border border-gray-600 bg-[#2a2a2a] px-4 py-3 text-[#F1F1F1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F3BE3]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-3xl border border-gray-600 bg-[#2a2a2a] px-4 py-3 text-[#F1F1F1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F3BE3]"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold" htmlFor="sector">
              Ad Sector
            </label>
            <input
              type="text"
              id="sector"
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              required
              className="w-full rounded-3xl border border-gray-600 bg-[#2a2a2a] px-4 py-3 text-[#F1F1F1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F3BE3]"
              placeholder="Eg: Real Estate, Fashion, Tech..."
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full rounded-3xl border border-gray-600 bg-[#2a2a2a] px-4 py-3 text-[#F1F1F1] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7F3BE3]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#7F3BE3] hover:bg-[#6C32C2] transition-colors text-white font-semibold py-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
