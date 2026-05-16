import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Lock, Zap, TrendingUp, Users, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="space-y-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
          Web3 Energy Domain Registry
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Register and trade blockchain domains for the global energy supply chain. Instant ownership, zero intermediaries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/domains" className="btn-primary">
            Browse Domains <ArrowRight size={20} />
          </Link>
          <Link to="/register" className="btn-secondary">
            Get Started
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { label: 'Active Domains', value: '1,247', icon: Globe },
          { label: '24h Trading Volume', value: '$2.4M', icon: TrendingUp },
          { label: 'Active Traders', value: '342', icon: Users },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="card text-center space-y-2">
            <Icon className="text-blue-400 mx-auto" size={32} />
            <p className="text-slate-400 text-sm">{label}</p>
            <p className="text-3xl font-bold text-cyan-400">{value}</p>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">Why Choose StrategicOilSupply?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: 'Global Reach',
              description: 'Connect with energy traders worldwide. Your domain works everywhere.',
            },
            {
              icon: Lock,
              title: 'Secure & Trustless',
              description: 'Blockchain-backed ownership. No intermediaries, full control.',
            },
            {
              icon: Zap,
              title: 'Instant Setup',
              description: 'Register in seconds. Start trading immediately.',
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="card space-y-4">
              <Icon className="text-cyan-400" size={40} />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: 1, title: 'Connect Wallet', description: 'Link your Ethereum wallet' },
            { step: 2, title: 'Browse Domains', description: 'Explore available domains' },
            { step: 3, title: 'Register', description: 'Complete registration with ETH' },
            { step: 4, title: 'Trade & Manage', description: 'Buy, sell, or manage domains' },
          ].map(({ step, title, description }) => (
            <div key={step} className="relative">
              <div className="card text-center space-y-4">
                <div className="w-12 h-12 bg-blue-500/20 border-2 border-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-blue-400">{step}</span>
                </div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-slate-400">{description}</p>
              </div>
              {step < 4 && (
                <div className="hidden md:block absolute right-0 top-1/3 translate-x-1/2 text-slate-600">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits List */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold text-center">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Decentralized ownership with blockchain verification',
            'Real-time trading on secondary markets',
            'No renewal fees - own your domain forever',
            'Transferable between wallets instantly',
            'Energy-efficient proof of stake network',
            'Community-driven governance and development',
          ].map((benefit) => (
            <div key={benefit} className="flex items-start gap-4 card">
              <Award className="text-green-400 flex-shrink-0 mt-1" size={20} />
              <p className="text-slate-200">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="card text-center space-y-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-blue-500/30">
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Join thousands of energy traders using StrategicOilSupply domains.
        </p>
        <Link to="/register" className="btn-primary inline-flex">
          Register Your Domain <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  )
}
