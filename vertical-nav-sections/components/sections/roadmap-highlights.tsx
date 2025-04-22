import Section from "@/components/section"

export default function RoadmapHighlights() {
  return (
    <Section id="roadmap-highlights" title="Road-Map Highlights">
      <ul className="space-y-4 mb-6">
        <li className="flex items-start">
          <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <span className="font-bold">1</span>
          </div>
          <div>
            <span className="font-bold">Beta v0.1</span> – Core capture + Follow‑Up & Daily Brief agents.
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <span className="font-bold">2</span>
          </div>
          <div>
            <span className="font-bold">v0.2</span> – Screenshots + OCR, Otter meetings, browser live feed.
          </div>
        </li>
        <li className="flex items-start">
          <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
            <span className="font-bold">3</span>
          </div>
          <div>
            <span className="font-bold">v1.0</span> – Autopilot safe‑action zone, mobile companion, team graph.
          </div>
        </li>
      </ul>
    </Section>
  )
}
