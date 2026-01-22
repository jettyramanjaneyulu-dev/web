"use client";

import React from "react";

export default function YouTubeSection() {
  return (
    <section className="py-24 bg-[#315879]">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="bg-white/40 backdrop-blur-2xl p-8 md:p-12 max-w-5xl w-full shadow-[0_25px_80px_rgba(0,0,0,0.25)] rounded-sm border border-white/30 relative overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C93A7C] via-[#f08560] to-[#C93A7C] opacity-30 blur-2xl pointer-events-none rounded-sm" />

          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">
            Latest Updates from Nami Life Sciences
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-8 leading-relaxed max-w-3xl relative z-10">
            Watch our latest videos to stay updated with innovations, products,
            research insights, and global developments from Nami Life Sciences.
          </p>

          {/* Video Wrapper */}
          <div className="relative overflow-hidden rounded-md shadow-2xl border border-white/40 bg-black relative z-10">

            {/* Responsive Video */}
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/iJvKjIf183I?autoplay=1&mute=1&rel=0"
                title="Nami Life Sciences Video"
                className="absolute inset-0 w-full h-full rounded-md"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Optional Caption */}
          <p className="text-xs text-gray-600 italic mt-6 text-center relative z-10">
            Subscribe to our YouTube channel for regular updates and insights.
          </p>
        </div>
      </div>
    </section>
  );
}
