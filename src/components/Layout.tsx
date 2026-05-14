import { Link, useLocation } from 'react-router'
import { Droplets, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { path: '/', label: 'Home' },
    { path: '/domains', label: 'Available Domains' },
    { path: '/register', label: 'Register' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#1a1208]/95 backdrop-blur-md border-b border-[#3d2b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg gradient-copper flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#f5e6d0] font-bold text-sm tracking-wide leading-tight">
                  STRATEGIC<span className="text-[#B87333]">OIL</span>SUPPLY
                </span>
                <span className="text-[#8B7355] text-[10px] tracking-widest uppercase leading-tight">
                  Web3 Energy Domains
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-[#D4A574] bg-[#3d2b14]/60'
                      : 'text-[#A0826D] hover:text-[#D4A574] hover:bg-[#3d2b14]/40'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://freename.io"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-5 py-2 rounded-md text-sm font-semibold gradient-copper text-white hover:opacity-90 transition-opacity"
              >
                Buy on Freename
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#A0826D]"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#3d2b14] bg-[#1a1208]">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium border-b border-[#3d2b14] ${
                  location.pathname === link.path
                    ? 'text-[#D4A574] bg-[#3d2b14]/40'
                    : 'text-[#A0826D]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="p-4">
              <a
                href="https://freename.io"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-3 rounded-md text-sm font-semibold gradient-copper text-white"
              >
                Buy on Freename
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a1208] border-t border-[#3d2b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md gradient-copper flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#f5e6d0] font-bold text-sm">
                  STRATEGIC<span className="text-[#B87333]">OIL</span>SUPPLY
                </span>
              </div>
              <p className="text-[#8B7355] text-sm leading-relaxed">
                The premier Web3 domain namespace for the global energy sector. 
                Own your digital identity on the blockchain.
              </p>
            </div>
            <div>
              <h4 className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-[#8B7355] hover:text-[#D4A574] text-sm transition-colors">Home</Link></li>
                <li><Link to="/domains" className="text-[#8B7355] hover:text-[#D4A574] text-sm transition-colors">Available Domains</Link></li>
                <li><Link to="/register" className="text-[#8B7355] hover:text-[#D4A574] text-sm transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider mb-3">
                Powered By
              </h4>
              <p className="text-[#8B7355] text-sm">
                Built on <a href="https://freename.io" target="_blank" rel="noopener noreferrer" className="text-[#B87333] hover:text-[#D4A574]">Freename.io</a> — 
                the leading Web3 domain platform. Minted on Polygon & Base.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[#3d2b14] text-center">
            <p className="text-[#5c4a3a] text-xs">
              &copy; 2026 .strategicoilsupply TLD. All rights reserved. Lifetime ownership. No renewal fees.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
