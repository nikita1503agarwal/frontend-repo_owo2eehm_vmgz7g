import { ShieldCheck, Stethoscope, FileStack, Share, Smartphone, Activity } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Military-grade Security',
    desc: 'End-to-end encryption, 2FA, and zero-knowledge architecture keep your records safe.'
  },
  {
    icon: FileStack,
    title: 'All Files, One Place',
    desc: 'Prescriptions, lab reports, scans, bills, insurance—organized with smart tags.'
  },
  {
    icon: Share,
    title: 'Granular Sharing',
    desc: 'Share specific files or folders with doctors or family with time-limited links.'
  },
  {
    icon: Smartphone,
    title: 'Everywhere Access',
    desc: 'Seamless sync across devices. Works offline and uploads when back online.'
  },
  {
    icon: Activity,
    title: 'Health Timeline',
    desc: 'Automatically builds a chronological view of your health history.'
  },
  {
    icon: Stethoscope,
    title: 'Provider Friendly',
    desc: 'One-tap sharing with hospitals and clinics, no app required for recipients.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Designed for real-life healthcare</h2>
          <p className="mt-4 text-slate-600">A premium experience that feels effortless while meeting the strictest standards.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-all">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
