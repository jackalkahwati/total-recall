import Section from "@/components/section"

export default function JoinWaitlist() {
  return (
    <Section id="join-waitlist" title="Join the Wait-List">
      <div className="bg-secondary/10 p-6 rounded-lg mb-6">
        <p className="text-xl mb-4">
          <strong>8,743</strong> professionals are already in line for the beta.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-6 my-8">
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-md font-bold text-lg transition-colors w-full max-w-md">
          Join the Wait-List
        </button>
        <p>drop your email, get early access & lifetime‑discount pricing.</p>
      </div>

      <p className="italic">We'll onboard the first cohort in waves of 250 users to keep feedback tight.</p>
    </Section>
  )
}
