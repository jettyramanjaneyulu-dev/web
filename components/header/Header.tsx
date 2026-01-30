"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

/* ------------------ NAV LINK ------------------ */
const NavLink = ({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    href={href}
    className={`text-[#f0f0f0] hover:text-[#C93A7C] transition-colors uppercase text-sm font-bold tracking-wider ${className}`}
  >
    {children}
  </Link>
);

/* ------------------ HEADER ------------------ */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
        {/* subtle glass gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#315879]/60 via-[#315879]/40 to-[#315879]/60 pointer-events-none" />

        <div className="relative px-8 flex justify-between items-center h-[76px]">
          {/* LEFT */}
          <div className="flex items-center gap-12">
            <Link href="/" className="relative w-35 h-16">
              <Image
                src="/assets/header/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              <NavLink href="/about">About Us</NavLink>

              {/* PRODUCTS DROPDOWN */}
              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                  <NavLink href="/products">Products</NavLink>
                  <ChevronDown
                    size={16}
                    className="text-white transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                <div className="absolute left-0 top-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-xl w-60 py-3">
                    <Link
                      href="/products/list"
                      className="block px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                    >
                      Products List
                    </Link>
                  </div>
                </div>
              </div>

              <NavLink href="/quality">Quality</NavLink>
              <NavLink href="/infrastructure">Infrastructure</NavLink>
              <NavLink href="/career">Career</NavLink>
              <NavLink href="/reach-us">Reach Us</NavLink>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
  <div className="breathe-wrap hidden lg:inline-flex">
    <Link
      href="#contact"
      className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                 bg-gradient-to-r from-[#18324d] via-[#0077b6] to-[#00b4d8]
                 text-white font-semibold text-sm shadow-lg
                 hover:scale-105 transition"
    >
      Get Quote Now <ArrowRight size={16} />
    </Link>
  </div>

 <button
  className="lg:hidden text-[#fff] hover:text-[#C93A7C] transition-colors"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label="Toggle menu"
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
            className="fixed top-[76px] left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 lg:hidden text-[#00abd3]"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold uppercase"
              >
                About Us
              </Link>

              {/* MOBILE PRODUCTS */}
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-bold uppercase"
                  >
                    Products
                  </Link>

                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="p-1"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 mt-3 overflow-hidden"
                    >
                      <Link
                        href="/products/list"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-white/90 hover:text-[#C93A7C]"
                      >
                        Products List
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/quality"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold uppercase"
              >
                Quality
              </Link>

              <Link
                href="/infrastructure"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold uppercase"
              >
                Infrastructure
              </Link>

              <Link
                href="/career"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold uppercase"
              >
                Career
              </Link>

              <Link
                href="/reach-us"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold uppercase"
              >
                Reach Us
              </Link>

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
