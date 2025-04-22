import Section from "@/components/section"

export default function KeyFeatures() {
  return (
    <Section id="key-features" title="Key Features (Beta)">
      <ol className="list-decimal list-inside space-y-6 mb-6">
        <li className="pl-2">
          <span className="font-bold">Zero‑Click Capture</span> – Gmail, Drive, Apple Mail, Slack, files, browser
          history.
        </li>
        <li className="pl-2">
          <span className="font-bold">Hybrid Memory Index</span> – vector + keyword + graph for instant, accurate
          recall.
        </li>
        <li className="pl-2">
          <span className="font-bold">Agent Layer</span> – Follow‑Ups, Daily Briefs, Goal Tracker.
        </li>
        <li className="pl-2">
          <span className="font-bold">One‑Command Setup</span> –{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">brew install total-recall && total-recall init</code>.
        </li>
        <li className="pl-2">
          <span className="font-bold">Local‑First Security</span> – everything stays on your Mac unless <em>you</em>{" "}
          flip the switch.
        </li>
      </ol>
    </Section>
  )
}
