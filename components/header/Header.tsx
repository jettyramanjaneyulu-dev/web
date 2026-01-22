"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-[#f0f0f0] hover:text-[#C93A7C] transition-colors uppercase text-sm font-bold tracking-wider"
  >
    {children}
  </Link>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 w-full z-40 bg-[#315879] border-b border-white/20 shadow-lg">

        <div className="w-full px-8 flex justify-between items-center">
          {/* LEFT */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-16">
                <Image
                  src="/assets/header/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <NavLink href="/about-us">About Us</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/quality">Quality</NavLink>
              <NavLink href="/infrastructure">Infrastructure</NavLink>
              <NavLink href="/career">Career</NavLink>
              <NavLink href="/reach-us">Reach Us</NavLink>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#18324d] via-[#0077b6] to-[#00b4d8] text-white font-semibold text-sm shadow-lg hover:scale-105 transition"
            >
              Get Quote Now <ArrowRight size={16} />
            </Link>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[97px] left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
           {[
  ["About Us", "/about-us"],
  ["Products", "/products"],
  ["Quality", "/quality"],
  ["Infrastructure", "/infrastructure"],
  ["Career", "/career"],
  ["Reach Us", "/reach-us"],
].map(([label, link]) => (
  <Link
    key={label}
    href={link}
    onClick={() => setMobileMenuOpen(false)}
    className="font-bold uppercase text-white hover:text-[#C93A7C]"
  >
    {label}
  </Link>
))}


              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#18324d] via-[#0077b6] to-[#00b4d8] text-white font-bold"
              >
                Get Quote Now <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
