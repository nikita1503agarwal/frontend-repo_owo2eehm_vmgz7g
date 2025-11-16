import { motion } from 'framer-motion'
import { Shield, Lock, Cloud, FileText, Upload, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute -top-32 -left-20 h-[600px] w-[600px] rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full bg-teal-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Your medical life, secured in one vault.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl"
          >
            Health-Vault keeps prescriptions, lab reports, scans, and insurance documents safely encrypted and instantly accessible across devices—just like DigiLocker, but tailored for your healthcare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-6 py-3 text-base font-semibold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 flex items-center gap-2">
              Get started free <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-6 py-3 text-base font-semibold rounded-xl border border-slate-200 hover:border-slate-300 bg-white/70 backdrop-blur">
              See how it works
            </button>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="h-5 w-5" />, label: 'HIPAA-grade security' },
              { icon: <Lock className="h-5 w-5" />, label: 'End-to-end encryption' },
              { icon: <Cloud className="h-5 w-5" />, label: 'Cloud backup' },
              { icon: <Upload className="h-5 w-5" />, label: 'One-tap sharing' },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-slate-700">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  {f.icon}
                </div>
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-2xl">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-emerald-500/30 blur-2xl" />
            <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-teal-500/30 blur-2xl" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Health-Vault</p>
                  <p className="text-xs text-slate-500">Encrypted Document Preview</p>
                </div>
              </div>
              <span className="text-xs text-slate-500">AES-256</span>
            </div>

            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Prescription_2025-04-12.pdf</span>
                <span className="text-emerald-600 font-medium">Secured</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">MRI_Scan_John_Doe.dcm</span>
                <span className="text-emerald-600 font-medium">Secured</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Insurance_Policy.pdf</span>
                <span className="text-emerald-600 font-medium">Secured</span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <p className="text-sm text-emerald-800">
                Your data is encrypted on your device before it ever reaches our servers. Only you hold the keys.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
