import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import CapabilitiesSection from "./CapabilitiesSection";
import ValuesSection from "./ValuesSection";
import FloatingCapsules from "./FloatingCapsules";

export default function AboutPage() {
  return (
    <main className="relative  text-neutral-900 overflow-hidden">

      {/* ===== Floating Capsules Background ===== */}
      <FloatingCapsules />

      {/* ===== Page Content ===== */}
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <CapabilitiesSection />
        <ValuesSection />
      </div>

    </main>
  );
}




// import AboutHero from "./AboutHero";
// import StoryTimeline from "./StoryTimeline";
// import WhoWeAre from "./WhoWeAre";
// import PurposePillars from "./PurposePillars";
// import CapabilitiesGrid from "./CapabilitiesGrid";
// import GlobalImpact from "./GlobalImpact";
// import EthicsCompliance from "./EthicsCompliance";
// import MoleculesBackground from "./MoleculesBackground";

// export default function AboutPage() {
//   return (
//     <main className="relative min-h-screen bg-[#0b2b45] text-white overflow-hidden">
//       <MoleculesBackground />

//       <AboutHero />
//       <StoryTimeline />
//       <WhoWeAre />
//       <PurposePillars />
//       <CapabilitiesGrid />
//       <GlobalImpact />
//       <EthicsCompliance />
//     </main>
//   );
// }


// import MoleculesBackground from "./MoleculesBackground";

// export default function AboutPage() {
//   return (
//     <main className="relative min-h-screen bg-[#0b2b45] text-white overflow-hidden">
//       {/* Animated Background */}
//       <MoleculesBackground />

//       {/* HERO SECTION */}
//       <section className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//           ABOUT <span className="text-pink-500">US</span>
//         </h1>

//         <p className="mt-6 text-xl md:text-2xl text-gray-300 font-medium">
//           Precision in Every Pellet
//         </p>
//       </section>

//       {/* CONTENT SECTION */}
//       <section className="relative z-10 max-w-4xl mx-auto px-6 space-y-14 pb-32">
        
//         {/* Paragraph 1 */}
//         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10
//                         transition duration-500 hover:scale-[1.02] hover:border-pink-500/40">
//           <p className="text-lg text-gray-300 leading-relaxed">
//             Nami Life Sciences is a technology-driven pharmaceutical and
//             nutraceutical company specializing in pellet-based drug delivery
//             systems. In a highly competitive global market, we help our partners
//             stand out through scientifically superior formulations, advanced
//             technologies, and consistent performance.
//           </p>
//         </div>

//         {/* Paragraph 2 */}
//         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10
//                         transition duration-500 hover:scale-[1.02] hover:border-pink-500/40">
//           <p className="text-lg text-gray-300 leading-relaxed">
//             For years, Nami Life Sciences has partnered with pharmaceutical and
//             nutraceutical companies to develop products that are not only
//             scientifically sound, but also technologically advanced and
//             commercially viable.
//           </p>
//         </div>

//         {/* Paragraph 3 */}
//         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10
//                         transition duration-500 hover:scale-[1.02] hover:border-pink-500/40">
//           <p className="text-lg text-gray-300 leading-relaxed">
//             Our end-to-end capabilities — from formulation development to
//             commercial manufacturing — are supported by state-of-the-art
//             infrastructure and a highly experienced team at our manufacturing
//             facility in India.
//           </p>
//         </div>
//       </section>

//       {/* CLOSING STATEMENT */}
//       <section className="relative z-10 max-w-4xl mx-auto px-6 pb-40 text-center">
//         <p className="text-2xl md:text-3xl font-medium leading-relaxed">
//           At Nami, we don’t just manufacture pellets. <br />
//           <span className="text-pink-500 font-semibold">
//             We engineer precision, performance, and reliability into every
//             product.
//           </span>
//         </p>
//       </section>
//     </main>
//   );
// }


