import { Lock, KeyRound, Eye, AlarmClock } from 'lucide-react'

export default function Security() {
  return (
    <section id="security" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-emerald-50 p-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight">Security, uncompromised</h2>
              <p className="mt-3 text-slate-600">Enterprise-grade protection with transparent controls and audits.</p>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
              {[{
                icon: Lock,
                title: 'Zero-knowledge encryption',
                desc: 'Files are encrypted on your device. Only you hold the keys.'
              }, {
                icon: KeyRound,
                title: '2FA & biometric unlock',
                desc: 'Secure your vault with hardware keys, OTP, or Face/Touch ID.'
              }, {
                icon: Eye,
                title: 'Access logs & alerts',
                desc: 'Real-time alerts and detailed logs for every view and download.'
              }, {
                icon: AlarmClock,
                title: 'Auto-expiring links',
                desc: 'Time-bound, single-use share links with immediate revocation.'
              }].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
