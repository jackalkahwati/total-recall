import Section from "@/components/section"
import { Shield, Lock, Code, FileText } from "lucide-react"

export default function SecurityFirst() {
  return (
    <Section id="security-first" title="Security First">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start">
          <div className="mr-4 text-secondary">
            <Lock size={24} />
          </div>
          <div>
            <p>Local AES-GCM encryption at rest</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 text-secondary">
            <Shield size={24} />
          </div>
          <div>
            <p>Keys stored in macOS Keychain</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 text-secondary">
            <Code size={24} />
          </div>
          <div>
            <p>Open‑source connectors & audits</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mr-4 text-secondary">
            <FileText size={24} />
          </div>
          <div>
            <p>Full audit trail of every agent action</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
