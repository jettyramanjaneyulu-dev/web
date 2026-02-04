"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import PageTransition from "@/components/PageTransition";

/* ------------------ NAV LINK (kept as-is) ------------------ */
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
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const navigateWithEffect = (href: string) => {
    setTransitioning(true);

    setTimeout(() => {
      router.push(href);
    }, 450);

    setTimeout(() => {
      setTransitioning(false);
    }, 1100);
  };

  /* ✅ NEW: Animated link (does NOT remove NavLink) */
  const AnimatedNavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => navigateWithEffect(href)}
      className="text-[#f0f0f0] hover:text-[#C93A7C]
                 transition-colors uppercase text-sm
                 font-bold tracking-wider bg-transparent"
    >
      {children}
    </button>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-[#315879]/60 via-[#315879]/40 to-[#315879]/60 pointer-events-none" />

        <div className="relative px-8 flex justify-between items-center h-[76px]">
          {/* LEFT */}
          <div className="flex items-center gap-12">
            {/* Logo → animated */}
            <button
              onClick={() => navigateWithEffect("/")}
              className="relative w-35 h-16"
            >
              <Image
                src="/assets/header/logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              <AnimatedNavLink href="/about">About Us</AnimatedNavLink>

              {/* PRODUCTS DROPDOWN */}
              <div className="relative group">
                <div className="flex items-center gap-1">
                  <AnimatedNavLink href="/products">Products</AnimatedNavLink>
                  <ChevronDown
                    size={16}
                    className="text-white transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                <div className="absolute left-0 top-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-xl w-60 py-3">
                    <button
                      onClick={() => navigateWithEffect("/products/list")}
                      className="block w-full px-5 py-3 text-left
                                 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                    >
                      Products List
                    </button>
                  </div>
                </div>
              </div>

              <AnimatedNavLink href="/quality">Quality</AnimatedNavLink>
              <AnimatedNavLink href="/infrastructure">Infrastructure</AnimatedNavLink>
              <AnimatedNavLink href="/career">Career</AnimatedNavLink>
              <AnimatedNavLink href="/reach-us">Reach Us</AnimatedNavLink>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-7 py-3 rounded-full
                         bg-gradient-to-r from-[#18324d] via-[#0077b6] to-[#00b4d8]
                         text-white font-semibold text-sm shadow-lg hover:scale-105 transition"
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
            className="fixed top-[76px] left-0 w-full z-50 bg-white/10 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              <button onClick={() => navigateWithEffect("/about")}>About Us</button>
              <button onClick={() => navigateWithEffect("/products")}>Products</button>
              <button onClick={() => navigateWithEffect("/quality")}>Quality</button>
              <button onClick={() => navigateWithEffect("/career")}>Career</button>
              <button onClick={() => navigateWithEffect("/reach-us")}>Reach Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PAGE TRANSITION */}
      <PageTransition show={transitioning} />
    </>
  );
}