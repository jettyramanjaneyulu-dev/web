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





