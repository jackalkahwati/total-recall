import Section from "@/components/section"

export default function SneakPeek() {
  return (
    <Section id="sneak-peek" title="Sneak Peek">
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
        <p className="text-gray-400 mb-2"># After install</p>
        <p className="mb-2">$ tr query "What did I promise Ross about Beam last week?"</p>
        <p className="text-green-400 mb-1">➡ Email draft (Mar‑17): "I'll send the franchise model on Friday…"</p>
        <p className="text-green-400">➡ Slack DM (Mar‑17): "Attaching the spreadsheet — ping me once reviewed."</p>
      </div>
    </Section>
  )
}
