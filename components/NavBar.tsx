"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <img
              src="/path-to-your-logo.png"
              alt="Astral Paints"
              className="h-8 mr-2"
            /> */}
            <span className="text-white font-bold text-xl">ASTRAL PAINTS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link href="/category" className="text-white hover:text-gray-200">
              Category
            </Link>
            <Link href="/services" className="text-white hover:text-gray-200">
              Services
            </Link>
            <Link href="/colours" className="text-white hover:text-gray-200">
              Colours
            </Link>
            <Link href="/downloads" className="text-white hover:text-gray-200">
              Downloads
            </Link>
            <Link
              href="/become-a-dealer"
              className="text-white hover:text-gray-200"
            >
              Become A Dealer
            </Link>
            <Link href="/blogs" className="text-white hover:text-gray-200">
              Blogs
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Enquire Now Button */}
          <button className="hidden md:block bg-white text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100">
            Enquire Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/about" className="block text-white py-2">
              About
            </Link>
            <Link href="/category" className="block text-white py-2">
              Category
            </Link>
            <Link href="/services" className="block text-white py-2">
              Services
            </Link>
            <Link href="/colours" className="block text-white py-2">
              Colours
            </Link>
            <Link href="/downloads" className="block text-white py-2">
              Downloads
            </Link>
            <Link href="/become-a-dealer" className="block text-white py-2">
              Become A Dealer
            </Link>
            <Link href="/blogs" className="block text-white py-2">
              Blogs
            </Link>
            <Link href="/contact" className="block text-white py-2">
              Contact
            </Link>
            <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 w-full">
              Enquire Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
