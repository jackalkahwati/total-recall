"use client"

import { useRef } from "react"
import TableOfContents from "@/components/table-of-contents"
import HeroSection from "@/components/hero-section"
import WhyPeopleWantIt from "@/components/sections/why-people-want-it"
import KeyFeatures from "@/components/sections/key-features"
import JoinWaitlist from "@/components/sections/join-waitlist"
import SneakPeek from "@/components/sections/sneak-peek"
import RoadmapHighlights from "@/components/sections/roadmap-highlights"
import SecurityFirst from "@/components/sections/security-first"
import FrequentlyAsked from "@/components/sections/frequently-asked"
import GetInEarly from "@/components/sections/get-in-early"
import Footer from "@/components/footer"

export default function Home() {
  const firstSectionRef = useRef<HTMLElement>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection nextSectionRef={firstSectionRef} />
      <div className="bg-primary text-primary-foreground flex-grow">
        <div className="container mx-auto px-4 py-8 flex gap-8">
          <TableOfContents />
          <main className="flex-1">
            <WhyPeopleWantIt />
            <KeyFeatures />
            <JoinWaitlist />
            <SneakPeek />
            <RoadmapHighlights />
            <SecurityFirst />
            <FrequentlyAsked />
            <GetInEarly />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
