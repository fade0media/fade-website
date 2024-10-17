'use client'

import React, { useState, useEffect } from "react";
import { AlignJustify, ArrowUpRight, X as XIcon } from "lucide-react";


const menuItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "#" },
  { id: 4, label: "Projects", href: "#" },
  
];

const Header: React.FC = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (hamburgerMenuIsOpen) {
        html.classList.add("overflow-hidden");
      } else {
        html.classList.remove("overflow-hidden");
      }
    }
  }, [hamburgerMenuIsOpen]);

  const handleToggleMenu = () => {
    if (hamburgerMenuIsOpen) {
      setIsFadingOut(true);
      setTimeout(() => {
        setHamburgerMenuIsOpen(false);
        setIsFadingOut(false); 
      }, 500); 
    } else {
      setHamburgerMenuIsOpen(true);
    }
  };

  return (
    <header className="fixed left-0 top-0 z-50  w-full border-b border-zinc-700 border-opacity-50 md:px-10 lg:px-16 px-4 backdrop-blur-md ">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a className="text-lg flex items-center font-bold" href="/">
          fade.
        </a>

        <ul className="md:flex h-full items-center justify-center gap-8 text-md hidden ">
          {menuItems.map((item) => (
            <li key={item.id} className="py-2">
              <a
                href={item.href}
                className="hover:text-gray-400 transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="/contact" className='bg-white text-black whitespace-nowrap px-3 py-2 flex justify-center items-center gap-2 text-xs rounded-2xl font-semibold cursor-pointer'>
                Get a Quote
              <ArrowUpRight className='w-4 h-4'/>
        </a>

        <button
          className="ml-6 md:hidden"
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          {hamburgerMenuIsOpen ? (
            <XIcon strokeWidth={1.4} className="text-gray-300" />
          ) : (
            <AlignJustify strokeWidth={1.4} className="text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {(hamburgerMenuIsOpen || isFadingOut) && (
        <nav
          className={`fixed top-14 h-screen py-8 left-0 z-50 w-full backdrop-blur-lg bg-black/70 transition-transform`}
        >
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`border-b pl-6 py-3 border-gray-600 border-opacity-45 ${
                  isFadingOut
                    ? "opacity-1 animate-fadeOut"
                    : "opacity-0 animate-fadeIn"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={item.href}
                  className="text-xl hover:text-gray-400 transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;