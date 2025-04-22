import ScrollArrow from "./scroll-arrow"
import type React from "react"

interface HeroSectionProps {
  nextSectionRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({ nextSectionRef }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/builtt_personal_cover_without_logo-kkH3tDxwbYuPQef78SKUFE53nupNRF.png)",
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "top right",
        }}
      />
      <div className="absolute inset-0 bg-secondary/70 z-0" />
      <div className="relative z-10 text-secondary-foreground text-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 text-center">TOTAL RECALL</h1>
        <h2 className="text-2xl italic mb-12">Your second brain. Installed in minutes. Private forever.</h2>

        <div className="mb-12 text-xl">
          <p className="mb-6 font-bold">Never miss an email, deadline, or idea again.</p>
          <p className="mb-8">
            Total Recall captures every data stream in your life—email, files, chats, meetings, even keystrokes—builds a
            private semantic memory graph, and deploys AI agents that remember, prioritise, and act for you.
          </p>
          <p className="text-xl font-semibold">Public beta opens soon — join the wait‑list below.</p>
        </div>

        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-bold text-lg transition-colors">
          Join the Wait-List
        </button>
      </div>
      <ScrollArrow targetRef={nextSectionRef} />
    </section>
  )
}

export default HeroSection
