import { Link } from 'react-router'
import { Globe, Shield, Zap, Wallet, ChevronRight, TrendingUp, Users, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const stats = [
    { value: '$5T+', label: 'Global Energy Market', icon: TrendingUp },
    { value: '1,769+', label: 'Oil & Gas Companies', icon: Users },
    { value: '50%', label: 'Royalty per Registration', icon: Lock },
    { value: '$0', label: 'Annual Renewal Fees', icon: Shield },
  ]

  const benefits = [
    {
      icon: Globe,
      title: 'Industry-Specific Identity',
      desc: 'Signal your sector alignment with an energy-native domain that commands instant credibility among counterparties.',
    },
    {
      icon: Wallet,
      title: 'Web3 Payment Routing',
      desc: 'Receive USDT, USDC, and crypto payments directly to your human-readable domain address via MetaMask Snap.',
    },
    {
      icon: Shield,
      title: 'Brand Protection',
      desc: 'Secure your brand across the energy Web3 namespace before competitors or speculators capture it.',
    },
    {
      icon: Zap,
      title: 'Lifetime Ownership',
      desc: 'No annual renewal fees. No expirations. Mint once, own forever on Polygon and Base.',
    },
  ]

  const personas = [
    { name: 'Commodity Traders', desc: 'Branded payment endpoints for oil, gas, and carbon credit settlements' },
    { name: 'Energy Consultants', desc: 'Credibility-focused domains that differentiate advisory services' },
    { name: 'Logistics Operators', desc: 'Geographic domains for tanker, pipeline, and terminal identity' },
    { name: 'Crypto-Native Startups', desc: 'Web3-first namespaces for RWA tokenization platforms' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-oil">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-[#B87333]" />
          <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-[#CD853F]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B87333]/15 border border-[#B87333]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#B87333] animate-pulse" />
              <span className="text-[#D4A574] text-xs font-semibold tracking-wider uppercase">
                Freename Web3 TLD
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#f5e6d0] leading-tight mb-6">
              The Digital Real Estate for{' '}
              <span className="text-transparent bg-clip-text gradient-copper">Global Energy</span>
            </h1>
            <p className="text-lg md:text-xl text-[#A0826D] leading-relaxed mb-8 max-w-2xl">
              <strong className="text-[#D4A574]">.strategicoilsupply</strong> is the premier Web3 domain 
              namespace for commodity traders, NOCs, IOCs, and energy service firms. Own your identity 
              on the blockchain — lifetime ownership, no renewal fees, 50% royalties for the TLD owner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/domains">
                <Button className="gradient-copper text-white font-semibold px-8 py-6 text-base hover:opacity-90">
                  Browse Available Domains <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="border-[#B87333] text-[#D4A574] hover:bg-[#B87333]/10 px-8 py-6 text-base">
                  Register Your Domain
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1a1208] border-y border-[#3d2b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#3d2b14] border border-[#5c3d1a] flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-[#B87333]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#D4A574]">{stat.value}</div>
                  <div className="text-xs text-[#8B7355]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-[#120d07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5e6d0] mb-4">
              Why Energy Firms Choose <span className="text-[#B87333]">.strategicoilsupply</span>
            </h2>
            <p className="text-[#8B7355] max-w-2xl mx-auto">
              Energy is a trust-first industry. Your domain is your digital calling card.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="bg-[#1a1208] border-[#3d2b14] hover:border-[#B87333]/50 transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-copper flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <b.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#f5e6d0] mb-2">{b.title}</h3>
                  <p className="text-[#8B7355] text-sm leading-relaxed">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Personas */}
      <section className="py-16 md:py-24 gradient-oil">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5e6d0] mb-4">
              Built For Every Player in Energy
            </h2>
            <p className="text-[#8B7355] max-w-2xl mx-auto">
              Four buyer personas. One namespace. Unlimited applications.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {personas.map((p) => (
              <div key={p.name} className="bg-[#1a1208]/80 border border-[#3d2b14] rounded-lg p-5 hover:border-[#B87333]/40 transition-all">
                <h4 className="text-[#D4A574] font-bold text-sm mb-2">{p.name}</h4>
                <p className="text-[#8B7355] text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Domains Preview */}
      <section className="py-16 md:py-24 bg-[#120d07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f5e6d0] mb-2">
                Premium Domains Available
              </h2>
              <p className="text-[#8B7355]">Secure your brand before the competition does.</p>
            </div>
            <Link to="/domains" className="hidden md:flex items-center text-[#B87333] hover:text-[#D4A574] text-sm font-semibold">
              View all domains <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'vitol', price: '$25,000', tier: 'Corporate' },
              { name: 'trafigura', price: '$25,000', tier: 'Corporate' },
              { name: 'aramco', price: '$25,000', tier: 'Corporate' },
              { name: 'trading', price: '$5,000', tier: 'Premium' },
              { name: 'rotterdam', price: '$5,000', tier: 'Premium' },
              { name: 'houston', price: '$1,000', tier: 'Professional' },
            ].map((d) => (
              <div key={d.name} className="flex items-center justify-between bg-[#1a1208] border border-[#3d2b14] rounded-lg px-5 py-4 hover:border-[#B87333]/50 transition-all group">
                <div>
                  <div className="text-[#f5e6d0] font-bold text-base">
                    {d.name}<span className="text-[#B87333]">.strategicoilsupply</span>
                  </div>
                  <div className="text-[#8B7355] text-xs mt-0.5">{d.tier} Tier</div>
                </div>
                <div className="text-right">
                  <div className="text-[#D4A574] font-bold">{d.price}</div>
                  <div className="text-[#5c4a3a] text-xs">one-time</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/domains">
              <Button variant="outline" className="border-[#B87333] text-[#D4A574]">
                View all domains <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d1f0e] via-[#3d2b14] to-[#2d1f0e]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5e6d0] mb-4">
            Your TLD is a Digital Oil Field That Pays Royalties Forever
          </h2>
          <p className="text-[#8B7355] mb-8 max-w-xl mx-auto">
            Join the 1,769+ energy firms moving to Web3-native identity. 
            Register your .strategicoilsupply domain today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register">
              <Button className="gradient-copper text-white font-semibold px-8 py-6 text-base hover:opacity-90">
                Register Now <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
