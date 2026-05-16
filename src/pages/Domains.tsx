import { Search, Filter, ChevronRight, Globe, Tag } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

interface Domain {
  name: string
  tier: 'Corporate' | 'Premium' | 'Professional' | 'Entry'
  price: string
  category: string
  description: string
}

const domains: Domain[] = [
  // Corporate Tier
  { name: 'vitol', tier: 'Corporate', price: '$25,000', category: 'Trading House', description: 'The world\'s largest independent oil trader. $331B turnover.' },
  { name: 'trafigura', tier: 'Corporate', price: '$25,000', category: 'Trading House', description: '$243B revenue, 6.8M b/d traded globally.' },
  { name: 'gunvor', tier: 'Corporate', price: '$25,000', category: 'Trading House', description: '$136B revenue on 232M tonnes traded.' },
  { name: 'mercuria', tier: 'Corporate', price: '$25,000', category: 'Trading House', description: '$128B revenue, $1.5-2B annual earnings.' },
  { name: 'aramco', tier: 'Corporate', price: '$25,000', category: 'NOC', description: 'Saudi Aramco — world\'s most profitable company.' },
  { name: 'shell', tier: 'Corporate', price: '$25,000', category: 'IOC', description: 'Supermajor IOC. Brand protection essential.' },
  { name: 'bp', tier: 'Corporate', price: '$25,000', category: 'IOC', description: 'British Petroleum supermajor.' },
  { name: 'total', tier: 'Corporate', price: '$25,000', category: 'IOC', description: 'TotalEnergies supermajor IOC.' },
  { name: 'exxon', tier: 'Corporate', price: '$25,000', category: 'IOC', description: 'ExxonMobil — largest U.S. oil company.' },
  { name: 'chevron', tier: 'Corporate', price: '$25,000', category: 'IOC', description: 'Chevron Corporation supermajor.' },
  { name: 'petrobras', tier: 'Corporate', price: '$15,000', category: 'NOC', description: 'Brazil\'s national oil company.' },
  { name: 'adnoc', tier: 'Corporate', price: '$15,000', category: 'NOC', description: 'Abu Dhabi National Oil Company.' },

  // Premium Tier
  { name: 'trading', tier: 'Premium', price: '$5,000', category: 'Service Term', description: 'The core function of the energy sector.' },
  { name: 'drilling', tier: 'Premium', price: '$5,000', category: 'Service Term', description: 'Upstream exploration and production.' },
  { name: 'refining', tier: 'Premium', price: '$5,000', category: 'Service Term', description: 'Downstream processing and refining.' },
  { name: 'pipeline', tier: 'Premium', price: '$5,000', category: 'Infrastructure', description: 'Midstream transport infrastructure.' },
  { name: 'rotterdam', tier: 'Premium', price: '$5,000', category: 'Geographic', description: 'Europe\'s primary refining and trading hub.' },
  { name: 'singapore', tier: 'Premium', price: '$5,000', category: 'Geographic', description: 'Asia\'s dominant oil trading hub. $54.5B exports.' },
  { name: 'storage', tier: 'Premium', price: '$3,000', category: 'Service Term', description: 'Tank farm and terminal operations.' },
  { name: 'chartering', tier: 'Premium', price: '$3,000', category: 'Service Term', description: 'Vessel charter and freight operations.' },
  { name: 'logistics', tier: 'Premium', price: '$3,000', category: 'Service Term', description: 'Supply chain and transport coordination.' },
  { name: 'bunkering', tier: 'Premium', price: '$3,000', category: 'Service Term', description: 'Marine fuel supply operations.' },

  // Professional Tier
  { name: 'houston', tier: 'Professional', price: '$1,000', category: 'Geographic', description: 'U.S. energy industry headquarters.' },
  { name: 'basra', tier: 'Professional', price: '$1,000', category: 'Geographic', description: 'Iraq\'s primary export terminal. 3.4M b/d.' },
  { name: 'permian', tier: 'Professional', price: '$1,000', category: 'Geographic', description: 'World\'s most productive oil basin.' },
  { name: 'northsea', tier: 'Professional', price: '$1,000', category: 'Geographic', description: 'Major European offshore producing region.' },
  { name: 'upstream', tier: 'Professional', price: '$1,000', category: 'Service Term', description: 'Exploration and production sector.' },
  { name: 'downstream', tier: 'Professional', price: '$1,000', category: 'Service Term', description: 'Refining, marketing, and distribution.' },
  { name: 'midstream', tier: 'Professional', price: '$1,000', category: 'Service Term', description: 'Transport, storage, and wholesale marketing.' },
  { name: 'consulting', tier: 'Professional', price: '$1,000', category: 'Service Term', description: 'Energy advisory and consultancy services.' },
  { name: 'compliance', tier: 'Professional', price: '$1,000', category: 'Service Term', description: 'Regulatory and trade compliance.' },
  { name: 'advisor', tier: 'Professional', price: '$1,000', category: 'Service Term', description: 'Independent energy advisory.' },

  // Entry Tier
  { name: 'tanker', tier: 'Entry', price: '$300', category: 'Service Term', description: 'Maritime crude and product transport.' },
  { name: 'terminal', tier: 'Entry', price: '$300', category: 'Infrastructure', description: 'Loading and discharge facilities.' },
  { name: ' crude', tier: 'Entry', price: '$300', category: 'Commodity', description: 'Raw petroleum commodity identifier.' },
  { name: 'lng', tier: 'Entry', price: '$300', category: 'Commodity', description: 'Liquefied natural gas trading.' },
  { name: 'diesel', tier: 'Entry', price: '$300', category: 'Product', description: 'Diesel and gasoil products.' },
  { name: 'gasoline', tier: 'Entry', price: '$300', category: 'Product', description: 'Motor gasoline and naphtha.' },
  { name: 'fueloil', tier: 'Entry', price: '$300', category: 'Product', description: 'Heavy fuel oil and residuals.' },
  { name: 'bitumen', tier: 'Entry', price: '$300', category: 'Product', description: 'Asphalt and road construction.' },
  { name: 'lube', tier: 'Entry', price: '$300', category: 'Product', description: 'Lubricants and base oils.' },
  { name: 'wax', tier: 'Entry', price: '$300', category: 'Product', description: 'Paraffin and petroleum waxes.' },
  { name: 'sulfur', tier: 'Entry', price: '$300', category: 'Product', description: 'Elemental sulfur byproduct.' },
  { name: 'petcoke', tier: 'Entry', price: '$300', category: 'Product', description: 'Petroleum coke solid fuel.' },
]

const tierColors: Record<string, string> = {
  Corporate: 'bg-[#8B0000]/20 border-[#8B0000]/40 text-[#ff6b6b]',
  Premium: 'bg-[#B87333]/20 border-[#B87333]/40 text-[#D4A574]',
  Professional: 'bg-[#2E5090]/20 border-[#2E5090]/40 text-[#6b9eff]',
  Entry: 'bg-[#2d5a27]/20 border-[#2d5a27]/40 text-[#7bc67b]',
}

const tierBadge: Record<string, string> = {
  Corporate: 'bg-[#8B0000]/30 text-[#ff6b6b]',
  Premium: 'bg-[#B87333]/30 text-[#D4A574]',
  Professional: 'bg-[#2E5090]/30 text-[#6b9eff]',
  Entry: 'bg-[#2d5a27]/30 text-[#7bc67b]',
}

export default function Domains() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<string>('All')

  const tiers = ['All', 'Corporate', 'Premium', 'Professional', 'Entry']

  const filtered = domains.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.description.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'All' || d.tier === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="bg-[#120d07] min-h-screen">
      {/* Header */}
      <div className="gradient-oil border-b border-[#3d2b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#f5e6d0] mb-3">
            Available <span className="text-[#B87333]">.strategicoilsupply</span> Domains
          </h1>
          <p className="text-[#8B7355] max-w-2xl">
            Browse our premium inventory of energy-sector Web3 domains. 
            Prices range from $300 (Entry) to $25,000 (Corporate). All domains minted on Polygon & Base.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c4a3a]" />
            <Input
              placeholder="Search domains..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-[#1a1208] border-[#3d2b14] text-[#f5e6d0] placeholder:text-[#5c4a3a] focus:border-[#B87333]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Filter className="w-4 h-4 text-[#5c4a3a] mt-1 mr-1" />
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  filter === t
                    ? 'gradient-copper text-white'
                    : 'bg-[#1a1208] text-[#8B7355] border border-[#3d2b14] hover:border-[#B87333]/40'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Domain Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((d) => (
            <div
              key={d.name}
              className={`group bg-[#1a1208] border rounded-lg p-5 hover:scale-[1.02] transition-all cursor-pointer ${tierColors[d.tier]}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#B87333]" />
                  <span className="text-[#5c4a3a] text-xs uppercase tracking-wider">{d.category}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${tierBadge[d.tier]}`}>
                  {d.tier}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-xl font-bold text-[#f5e6d0]">{d.name}</span>
                <span className="text-[#B87333] font-bold text-xl">.strategicoilsupply</span>
              </div>
              <p className="text-[#8B7355] text-sm mb-4 leading-relaxed">{d.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#D4A574] text-2xl font-bold">{d.price}</span>
                  <span className="text-[#5c4a3a] text-xs ml-1">one-time</span>
                </div>
                <a
                  href="https://freename.io/discover/strategicoilsupply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-[#B87333] hover:text-[#D4A574] transition-colors"
                >
                  <Tag className="w-4 h-4" />
                  Claim
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-[#3d2b14] mx-auto mb-4" />
            <p className="text-[#5c4a3a] text-lg">No domains match your search.</p>
            <button
              onClick={() => { setSearch(''); setFilter('All') }}
              className="mt-2 text-[#B87333] hover:text-[#D4A574] text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
    }
          
