'use client'

import React, { useState, useEffect } from "react";
import { AlignJustify, ArrowUpRight, X as XIcon } from "lucide-react";
import Logo from "@/components/ui/Logo";


const menuItems = [
  { id: 1, label: "Home", href: "/" },
  
  { id: 2, label: "Services", href: "/services" },
  { id: 3, label: "Projects", href: "/projects" },
  
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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-700 border-opacity-0 ">

      <div className="w-full flex h-14 items-center justify-between backdrop-blur-md bg-black/40 px-8 md:px-24 ">
        <Logo />

        <ul className="md:flex absolute left-1/2 top-0 -translate-x-1/2 h-full items-center justify-center gap-8 text-md hidden">
          {menuItems.map((item) => (
            <li key={item.id} className="py-2 text-center w-16">
              <a
                href={item.href}
                className="hover:text-gray-400 transition duration-300 text-center"
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
        className={`fixed z-50 top-14 h-screen left-0 w-full backdrop-blur-md bg-black/40 transition-transform`}
        style={{ isolation: 'isolate' }}
      >
      
          <ul className="flex flex-col mt-8">
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