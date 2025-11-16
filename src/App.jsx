import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Security from './components/Security'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Security />
        <Pricing />

        <footer className="border-t border-slate-200 mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Health-Vault. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#security" className="hover:text-slate-900">Security</a>
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
