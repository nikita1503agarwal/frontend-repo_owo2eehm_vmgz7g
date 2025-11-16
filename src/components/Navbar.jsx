import { useState } from 'react'
import { ShieldCheck, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 backdrop-blur-xl bg-white/60 border-b border-white/20" />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Health<span className="text-emerald-600">Vault</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <Link
            to="/test"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            API Test
          </Link>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm">
              Create free vault
            </button>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-200">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden relative mx-4 mt-2 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl p-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-slate-700">
              {item.label}
            </a>
          ))}
          <Link to="/test" className="block text-slate-700">API Test</Link>
          <div className="flex gap-3 pt-2">
            <button className="flex-1 px-4 py-2 text-sm font-medium rounded-lg border border-slate-200">Sign in</button>
            <button className="flex-1 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-600 text-white">Create free vault</button>
          </div>
        </div>
      )}
    </header>
  )
}
