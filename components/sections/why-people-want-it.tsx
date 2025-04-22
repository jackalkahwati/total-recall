import Section from "@/components/section"

export default function WhyPeopleWantIt() {
  return (
    <Section id="why-people-want-it" title="Why People Want It">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-secondary text-secondary-foreground">
              <th className="py-3 px-4 text-left font-semibold w-1/2">Pain</th>
              <th className="py-3 px-4 text-left font-semibold w-1/2">Total Recall Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 border-t">Inbox chaos & missed follow‑ups</td>
              <td className="py-3 px-4 border-t">Follow‑Up Agent drafts & sends nudges automatically</td>
            </tr>
            <tr className="bg-white">
              <td className="py-3 px-4 border-t">Buried docs & forgotten chats</td>
              <td className="py-3 px-4 border-t">One‑query perfect recall across every tool</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-3 px-4 border-t">Goal drift & stalled momentum</td>
              <td className="py-3 px-4 border-t">Goal‑Tracker Agent surfaces KPIs and schedules focus blocks</td>
            </tr>
            <tr className="bg-white">
              <td className="py-3 px-4 border-t">Privacy worries</td>
              <td className="py-3 px-4 border-t">
                100% local processing, AES‑256 encryption; nothing leaves your machine
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  )
}
