/** @format */

import React, { useState, useEffect } from "react";
import { PhoneIcon, MenuIcon, CloseIcon } from "../../assets/svg";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "خدماتنا", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "آراء العملاء", href: "#testimonials" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='/images/logo.png'
              alt='GCM Repair Services Logo'
              width={120}
              height={100}
              className='object-contain w-[120px] h-[80px] overflow-hidden '
            />
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isScrolled ? "text-gray-700" : "text-gray-700"
                }`}>
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className='hidden lg:flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <PhoneIcon
                className={`w-5 h-5 ${
                  isScrolled ? "text-blue-600" : "text-blue-600"
                }`}
              />
              <span
                className={`font-medium ${
                  isScrolled ? "text-gray-700" : "text-gray-700"
                }`}>
                +966 55 714 6247
              </span>
            </div>
            <button
              onClick={() => window.open("tel:+966557146247", "_self")}
              className='bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'>
              احجز الآن
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden p-2'>
            {isMenuOpen ? (
              <CloseIcon
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-700" : "text-gray-700"
                }`}
              />
            ) : (
              <MenuIcon
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-700" : "text-gray-700"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl border-t border-gray-200'>
            <nav className='py-6 space-y-4'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className='block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200'>
                  {item.name}
                </a>
              ))}
              <div className='px-6 pt-4 border-t border-gray-200'>
                <div className='flex items-center space-x-2 mb-4'>
                  <PhoneIcon className='w-5 h-5 text-blue-600' />
                  <span className='font-medium text-gray-700'>
                    +966 55 714 6247
                  </span>
                </div>
                <button
                  onClick={() => {
                    window.open("tel:+966557146247", "_self");
                    setIsMenuOpen(false);
                  }}
                  className='w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200'>
                  احجز الآن
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
