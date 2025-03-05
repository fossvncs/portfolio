import HeaderSection from "./_components/HeaderSection";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { House } from "lucide-react";
import { SocialMediaSection } from "./_components/SocialMediaSection";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { TimelineSection } from "./_components/TimelineSection";
import HeroSection from "./_components/HeroSection";



export default function Home() {

  const navItems = [
    {name: 'Hero', link: "#", icon: <House />},
    {name: 'Projects', link: "#", icon: <House />},
    {name: 'Timeline', link: "#", icon: <House />},
    {name: 'Contact', link: "#", icon: <House />},
    
  ]

  return (
    <>
      <HeaderSection/>
      <HeroSection/>
      <FloatingNav navItems={navItems}></FloatingNav>
      {/* stacksSection */}
      <TimelineSection></TimelineSection>
      <SocialMediaSection></SocialMediaSection>
      {/* footerSection */}
    </>
  );
}
