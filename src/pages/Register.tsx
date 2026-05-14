import { Globe, Shield, Zap, CreditCard, Check, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const tiers = [
  {
    name: 'Entry',
    price: '$300',
    examples: ['tanker', 'terminal', 'lng', 'diesel'],
    features: [
      'Lifetime ownership — no renewals',
      'Minted on Polygon + Base',
      'DNS resolution via Freename',
      'Browser extension support',
      'Basic WHOIS listing',
    ],
    cta: 'Browse Entry Domains',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$1,000',
    examples: ['houston', 'permian', 'upstream', 'consulting'],
    features: [
      'Everything in Entry, plus:',
      'Priority DNS propagation',
      'Branded email forwarding',
      'Web3 website builder access',
      'MetaMask Snap resolution',
      'Premium WHOIS profile',
    ],
    cta: 'Browse Professional',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$5,000',
    examples: ['trading', 'rotterdam', 'drilling', 'pipeline'],
    features: [
      'Everything in Professional, plus:',
      'Global Resolution API ready',
      'Multi-chain wallet binding',
      'Enterprise support priority',
      'Listed on Aftermarket',
      'SEO-optimized landing page',
    ],
    cta: 'Browse Premium',
    highlight: true,
  },
  {
    name: 'Corporate',
    price: '$25,000',
    examples: ['vitol', 'aramco', 'shell', 'trafigura'],
    features: [
      'Everything in Premium, plus:',
      'White-glove onboarding',
      'Reseller API integration',
      'Dedicated account manager',
      'Trademark consultation',
      'Custom sub-TLD evaluation',
    ],
    cta: 'Inquire Corporate',
    highlight: false,
  },
]

const steps = [
  {
    num: '01',
    title: 'Choose Your Domain',
    desc: 'Browse available SLDs across four pricing tiers. Search by keyword, category, or geographic region.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'Connect Your Wallet',
    desc: 'Use MetaMask or any Web3 wallet on Polygon or Base. Gas fees are typically under $0.50.',
    icon: CreditCard,
  },
  {
    num: '03',
    title: 'Mint & Own Forever',
    desc: 'Complete the on-chain registration. The domain is yours for life — no annual renewal fees.',
    icon: Shield,
  },
  {
    num: '04',
    title: 'Activate Features',
    desc: 'Set up DNS resolution, branded email, and crypto payment routing via MetaMask Snap.',
    icon: Zap,
  },
]

export default function Register() {
  return (
    <div className="bg-[#120d07]">
      {/* Header */}
      <div className="gradient-oil border-b border-[#3d2b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#f5e6d0] mb-3">
            Register Your <span className="text-[#B87333]">.strategicoilsupply</span> Domain
          </h1>
          <p className="text-[#8B7355] max-w-2xl mx-auto">
            Lifetime ownership. No renewal fees. Minted on Polygon and Base. 
            Connect your wallet and claim your energy-sector identity today.
          </p>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#f5e6d0] mb-3">Pricing Tiers</h2>
            <p className="text-[#8B7355]">
              Four tiers designed for every player in the energy sector — from individual consultants to global trading houses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative bg-[#1a1208] border transition-all hover:scale-[1.02] ${
                  tier.highlight
                    ? 'border-[#B87333] shadow-lg shadow-[#B87333]/10'
                    : 'border-[#3d2b14] hover:border-[#B87333]/40'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 gradient-copper rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#f5e6d0] mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-[#D4A574]">{tier.price}</span>
                    <span className="text-[#5c4a3a] text-sm">one-time</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-[#5c4a3a] text-xs uppercase tracking-wider mb-2">Example domains:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.examples.map((ex) => (
                        <span key={ex} className="px-2 py-1 bg-[#3d2b14] rounded text-[#8B7355] text-xs">
                          {ex}.strategicoilsupply
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-[#B87333] mt-0.5 flex-shrink-0" />
                        <span className="text-[#8B7355]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://freename.io/discover/strategicoilsupply"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`w-full font-semibold ${
                        tier.highlight
                          ? 'gradient-copper text-white hover:opacity-90'
                          : 'bg-[#3d2b14] text-[#D4A574] hover:bg-[#5c3d1a]'
                      }`}
                    >
                      {tier.cta} <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 gradient-oil border-y border-[#3d2b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#f5e6d0] mb-3">How It Works</h2>
            <p className="text-[#8B7355]">
              Four simple steps from discovery to ownership. No technical expertise required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-[#1a1208] border border-[#3d2b14] rounded-lg p-6 hover:border-[#B87333]/40 transition-all">
                  <div className="text-4xl font-black text-[#3d2b14] mb-3">{step.num}</div>
                  <div className="w-10 h-10 rounded-lg gradient-copper flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#f5e6d0] mb-2">{step.title}</h3>
                  <p className="text-[#8B7355] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#f5e6d0] mb-3">
              .strategicoilsupply vs Traditional Domains
            </h2>
            <p className="text-[#8B7355]">
              See why Web3 domains are winning across every dimension that matters.
            </p>
          </div>

          <div className="bg-[#1a1208] border border-[#3d2b14] rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-semibold border-b border-[#3d2b14]">
              <div className="px-5 py-4 text-[#8B7355]">Feature</div>
              <div className="px-5 py-4 text-[#D4A574] text-center">.strategicoilsupply</div>
              <div className="px-5 py-4 text-[#5c4a3a] text-center">Traditional .com</div>
            </div>
            {[
              { feature: 'Annual Renewal Fee', ours: '$0 (lifetime)', theirs: '$10 - $50/year' },
              { feature: 'Web3 Payment Routing', ours: 'Built-in (MetaMask)', theirs: 'Not available' },
              { feature: 'Industry Relevance', ours: 'Energy-specific', theirs: 'Generic' },
              { feature: 'Blockchain Minted', ours: 'Polygon + Base', theirs: 'Centralized registry' },
              { feature: 'Censorship Risk', ours: 'Decentralized', theirs: 'ICANN-controlled' },
              { feature: 'Crypto Wallet ID', ours: 'Human-readable', theirs: '42-char hex only' },
              { feature: 'Brand Protection', ours: 'Namespace exclusive', theirs: 'Crowded namespace' },
            ].map((row) => (
              <div key={row.feature} className="grid grid-cols-3 text-sm border-b border-[#3d2b14] last:border-0">
                <div className="px-5 py-3.5 text-[#f5e6d0]">{row.feature}</div>
                <div className="px-5 py-3.5 text-center text-[#7bc67b] font-medium bg-[#2d5a27]/10">{row.ours}</div>
                <div className="px-5 py-3.5 text-center text-[#ff6b6b] bg-[#8B0000]/10">{row.theirs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-oil border-t border-[#3d2b14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5e6d0] mb-4">
            Ready to Claim Your Domain?
          </h2>
          <p className="text-[#8B7355] mb-8">
            Browse our full inventory on Freename.io and secure your energy-sector Web3 identity today. 
            Every registration supports the .strategicoilsupply ecosystem and earns the TLD owner a 50% royalty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://freename.io/discover/strategicoilsupply"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gradient-copper text-white font-semibold px-8 py-6 text-base hover:opacity-90">
                Buy on Freename <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="mailto:sales@strategicoilsupply">
              <Button variant="outline" className="border-[#B87333] text-[#D4A574] hover:bg-[#B87333]/10 px-8 py-6 text-base">
                Contact Sales
              </Button>
            </a>
          </div>
          <p className="mt-6 text-[#5c4a3a] text-sm">
            Questions? Reach us at <a href="mailto:sales@strategicoilsupply" className="text-[#B87333] hover:text-[#D4A574]">sales@strategicoilsupply</a>
          </p>
        </div>
      </section>
    </div>
  )
}
