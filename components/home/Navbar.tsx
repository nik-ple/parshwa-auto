"use client";

import {useEffect, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { CONFIG } from "@/lib/site";
import Image from 'next/image';


export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "Sell Process", href: "#process"  },
    { label: "Why Us",       href: "#why-us"   },
    { label: "Exchange",     href: "#exchange" },
    { label: "Reviews",      href: "#reviews"  },
    { label: "Contact",      href: "#contact"  },
  ];

  return (
    <>
      {/* ── Desktop + tablet nav ── */}
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        <nav className="max-w-[1280px] mx-auto px-5 h-full flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Parshwa Auto — Home">
            <Image
              src="/images/parshwa_auto_logo_2.png"
              alt="Parshwa Auto"
              width={38}
              height={38}
            />
            <span className="text-[15px] font-bold tracking-[-0.02em] text-gray-900">
              PARSHWA<span className="text-[#F97316]">AUTO</span>
            </span>
          </a>

          {/* Centre links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[13.5px] font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-sm"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#sell"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-4 bg-[#F97316] hover:bg-[#EA6400] text-white text-[13.5px] font-semibold rounded-[18px] transition-all duration-200 shadow-[0_4px_14px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.42)] active:scale-[0.97]"
            >
              Sell My Bike
              <ArrowRight size={13} strokeWidth={2.5} />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-9 h-9 flex flex-col justify-center items-end gap-[5px] pr-0.5"
              aria-label="Open navigation menu"
            >
              <span className="block w-[20px] h-[1.5px] bg-gray-800 rounded-full" />
              <span className="block w-[14px] h-[1.5px] bg-gray-800 rounded-full" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-white/96 backdrop-blur-2xl flex flex-col"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
          >
            {/* Close row */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
              <span className="text-[15px] font-bold tracking-[-0.02em]">
                PARSHWA<span className="text-[#F97316]">AUTO</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[28px] font-bold text-gray-900 tracking-[-0.025em]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: EASE_OUT_EXPO }}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#sell"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 bg-[#F97316] text-white font-semibold text-[16px] rounded-[18px]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06, duration: 0.35, ease: EASE_OUT_EXPO }}
              >
                Sell My Bike <ArrowRight size={15} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}