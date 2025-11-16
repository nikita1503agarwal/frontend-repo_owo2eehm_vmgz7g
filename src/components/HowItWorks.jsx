import { UploadCloud, Fingerprint, Link2, Shield } from 'lucide-react'

const steps = [
  {
    icon: UploadCloud,
    title: 'Import',
    desc: 'Upload PDFs, images, DICOM, or email-forward prescriptions. Auto-tagging organizes everything.'
  },
  {
    icon: Fingerprint,
    title: 'Secure',
    desc: 'Client-side encryption locks files with your key. We can’t see your data.'
  },
  {
    icon: Link2,
    title: 'Share',
    desc: 'Create a secure link with permissions and expiry. Revoke anytime.'
  },
  {
    icon: Shield,
    title: 'Control',
    desc: 'Detailed access logs show who viewed what and when.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">How Health-Vault works</h2>
            <p className="mt-4 text-slate-600">From chaos to clarity in minutes. Designed to be delightful for patients and providers alike.</p>
            <div className="mt-8 space-y-6">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-500/30 blur-2xl" />
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 grid place-items-center text-emerald-700 font-semibold">
                Premium demo video placeholder
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="p-3 rounded-lg border border-slate-200">ISO 27001</div>
                <div className="p-3 rounded-lg border border-slate-200">SOC 2</div>
                <div className="p-3 rounded-lg border border-slate-200">HIPAA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
