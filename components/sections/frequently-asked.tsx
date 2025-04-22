import Section from "@/components/section"

export default function FrequentlyAsked() {
  return (
    <Section id="frequently-asked" title="Frequently Asked">
      <div className="space-y-6">
        <div>
          <p className="font-bold mb-2">Q: Will this slow my Mac down?</p>
          <p>A: Ingest runs at low priority; typical CPU load &lt; 3%.</p>
        </div>

        <div>
          <p className="font-bold mb-2">Q: Windows / Linux support?</p>
          <p>A: Planned after Mac beta — sign up to be notified.</p>
        </div>

        <div>
          <p className="font-bold mb-2">Q: Cost?</p>
          <p>A: Early adopters get lifetime access for one flat fee when we launch v1.0.</p>
        </div>
      </div>
    </Section>
  )
}
