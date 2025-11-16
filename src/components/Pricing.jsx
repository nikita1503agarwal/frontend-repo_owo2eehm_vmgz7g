export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you need more storage or advanced sharing.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {[{
            name: 'Free',
            price: '₹0',
            features: ['1 GB secure storage', 'Basic tagging', 'Standard encryption', 'Email support'],
            cta: 'Start for free'
          }, {
            name: 'Pro',
            price: '₹249/mo',
            features: ['50 GB secure storage', 'Advanced search', 'Share controls', 'Priority support'],
            highlight: true,
            cta: 'Upgrade to Pro'
          }, {
            name: 'Family',
            price: '₹499/mo',
            features: ['200 GB secure storage', '5 family members', 'Shared folders', 'Priority support'],
            cta: 'Get Family plan'
          }].map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlight ? 'border-emerald-300 ring-2 ring-emerald-200' : 'border-slate-200'} bg-white p-6 flex flex-col`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="text-3xl font-bold">{tier.price}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2 text-sm font-semibold rounded-lg ${tier.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'border border-slate-200 hover:border-slate-300'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
