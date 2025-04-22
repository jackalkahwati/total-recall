import Section from "@/components/section"

export default function GetInEarly() {
  return (
    <Section id="get-in-early" title="Get in Early">
      <div className="bg-secondary/10 p-6 rounded-lg mb-6">
        <p className="text-xl">
          Join <strong>8,743</strong> people waiting for a personal Chief‑of‑Staff that never forgets.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6 my-8">
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-md font-bold text-lg transition-colors w-full max-w-md flex items-center justify-center">
          <span className="mr-2">➜</span> Join the Wait-List
        </button>
        <p>(email only — 10 sec)</p>
      </div>

      <p className="italic">You'll receive a confirmation and periodic build‑progress updates.</p>
    </Section>
  )
}
