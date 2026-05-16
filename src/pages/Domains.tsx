import { useState } from 'react'
import { Search, Filter, CheckCircle, AlertCircle } from 'lucide-react'

const DOMAINS = [
  { id: 1, name: 'crude-trading', tld: '.strategicoilsupply', price: 2.5, category: 'trading', available: true },
  { id: 2, name: 'refinery-ops', tld: '.strategicoilsupply', price: 3.0, category: 'refining', available: true },
  { id: 3, name: 'energy-hub', tld: '.strategicoilsupply', price: 4.5, category: 'distribution', available: false },
  { id: 4, name: 'oil-futures', tld: '.strategicoilsupply', price: 2.8, category: 'trading', available: true },
  { id: 5, name: 'supply-chain', tld: '.strategicoilsupply', price: 3.5, category: 'logistics', available: true },
  { id: 6, name: 'storage-hub', tld: '.strategicoilsupply', price: 3.2, category: 'storage', available: true },
  { id: 7, name: 'market-data', tld: '.strategicoilsupply', price: 2.2, category: 'analytics', available: true },
  { id: 8, name: 'energy-trade', tld: '.strategicoilsupply', price: 3.8, category: 'trading', available: false },
]

const CATEGORIES = ['All', 'trading', 'refining', 'distribution', 'logistics', 'storage', 'analytics']

export default function Domains() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [showAvailable, setShowAvailable] = useState(true)

  const filtered = DOMAINS.filter((domain) => {
    const matchesSearch = domain.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || domain.category === category
    const matchesAvailability = showAvailable ? domain.available : !domain.available

    return matchesSearch && matchesCategory && matchesAvailability
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Browse Domains</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Explore available Web3 domains for the energy sector. Find the perfect domain for your business.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3.5 text-slate-500" size={20} />
          <input
            type="text"
            placeholder="Search domains..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Category & Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400">
            <Filter size={20} />
            <span className="font-semibold">Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Availability Toggle */}
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showAvailable}
              onChange={(e) => setShowAvailable(e.target.checked)}
              className="w-4 h-4 rounded bg-slate-700 border-slate-600"
            />
            <span className="text-slate-300">Show Available Only</span>
          </label>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-slate-400">
        Showing <span className="font-semibold text-blue-400">{filtered.length}</span> domains
      </p>

      {/* Domains Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((domain) => (
            <div key={domain.id} className="card space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-blue-400">
                    {domain.name}
                    <span className="text-slate-400">{domain.tld}</span>
                  </h3>
                  <p className="text-sm text-slate-500 capitalize mt-1">{domain.category}</p>
                </div>
                {domain.available ? (
                  <CheckCircle className="text-green-400" size={20} />
                ) : (
                  <AlertCircle className="text-orange-400" size={20} />
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <div>
                  <p className="text-slate-400 text-sm">Price</p>
                  <p className="text-2xl font-bold text-cyan-400">{domain.price} ETH</p>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    domain.available
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                  disabled={!domain.available}
                >
                  {domain.available ? 'Register' : 'Reserved'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-slate-400 text-lg">No domains found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
