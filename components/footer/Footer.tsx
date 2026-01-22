"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#315879] py-16 overflow-hidden border-t border-[#f0f0f0]/10">
            {/* Decorative Background Shapes - Adjusted Colors */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#C93A7C] rounded-br-full z-0 translate-x-[-30%] translate-y-[-30%]" />
            <div className="absolute top-1/2 left-0 w-48 h-64 bg-[#C93A7C] rounded-r-full z-0 translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-48 bg-[#C93A7C] rounded-tr-full z-0 translate-y-[30%]" />
            <div className="absolute top-20 left-0 w-32 h-64 bg-[#f08560] rounded-r-full z-0 opacity-80" />
    
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C93A7C] rounded-tl-full z-0 translate-x-[30%]" />
            <div className="absolute bottom-40 right-0 w-32 h-64 bg-[#f08560] rounded-l-full z-0 opacity-80" />
    
            <div className="relative z-10 container mx-auto px-6">
              <div className="bg-white/40 backdrop-blur-2xl p-12 md:p-16 w-full shadow-[0_30px_90px_rgba(0,0,0,0.3)] relative border border-white/30">
                {/* Logo */}
                <div className="mb-12 flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src="/assets/footer-n-logo.png"
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                  {/* Main Links */}
                  <div className="space-y-4">
                    {[
                      "COMPANY",
                      "SUSTAINABILITY",
                      "CAREERS",
                      "Blogs",
                      "PRESS",
                      "SUPPLIERS",
                      "CONTACT US",
                      "EVENTS",
                      "LOCATIONS",
                    ].map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block text-[#C93A7C] font-bold text-sm tracking-widest hover:text-[#f0f0f0] transition-colors uppercase"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
    
                  {/* Life Science */}
                  <div>
                    <h4 className="text-[#18324d] font-bold text-xs uppercase tracking-widest mb-6">
                      Pharmaceuticals
                    </h4>
                    <ul className="space-y-4 text-sm text-[#4b5563] font-medium">
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Pellet Formulations
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        MUPS Technology
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Contract Manufacturing
                      </li>
                    </ul>
                  </div>
    
                  {/* Healthcare */}
                  <div>
                    <h4 className="text-[#18324d] font-bold text-xs uppercase tracking-widest mb-6">
                      Global Reach
                    </h4>
                    <ul className="space-y-4 text-sm text-[#4b5563] font-medium">
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Middle East
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Asia Pacific
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        International Logistics
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Partner Network
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Export Compliance
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Global Standards
                      </li>
                    </ul>
                  </div>
    
                  {/* Electronics */}
                  <div>
                    <h4 className="text-[#18324d] font-bold text-xs uppercase tracking-widest mb-6">
                      Manufacturing
                    </h4>
                    <ul className="space-y-4 text-sm text-[#4b5563] font-medium">
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Quality Assurance
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Safety Protocols
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Production Capacity
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Technology Integration
                      </li>
                      <li className="hover:text-[#C93A7C] cursor-pointer">
                        Environmental Responsibility
                      </li>
                    </ul>
                  </div>
                </div>
    
                {/* Social Icons */}
                <div className="flex gap-4 mb-12">
                  {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                    <div
                      key={i}
                      className="bg-[#4b5563] rounded-full p-2 hover:bg-[#C93A7C] transition-colors cursor-pointer text-white"
                    >
                      <Icon size={20} fill="white" className="stroke-none" />
                    </div>
                  ))}
                </div>
    
                {/* Bottom Links */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-[#6b7280] font-bold tracking-wider uppercase">
                  <p className="normal-case font-normal text-[#18324d]">
                    © 2026 Nami Life Sciences. All rights reserved.
                  </p>
                  <div className="flex flex-wrap gap-6 text-[#18324d]">
                    <Link href="#" className="hover:text-[#C93A7C]">
                      Sitemap
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#" className="hover:text-[#C93A7C]">
                      Legal Disclaimer
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#" className="hover:text-[#C93A7C]">
                      Privacy Statement
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#" className="hover:text-[#C93A7C]">
                      Cookie Settings
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link href="#" className="hover:text-[#C93A7C]">
                      Terms Of Use
                    </Link>
                  </div>
                </div>
    
                {/* Bottom Decor */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-[#f0f0f0] rounded-full p-3 border-white cursor-pointer hover:bg-[#C93A7C] transition-colors shadow-lg"
                  >
                    <ChevronRight className="text-white -rotate-90" size={24} />
                  </button>
                </div>
              </div>
            </div>
          </footer>
  );
}
