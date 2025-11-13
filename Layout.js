import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Zap, Menu, X } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { name: "Home", path: "Home" },
    { name: "About", path: "About" },
    { name: "Articles", path: "Articles" },
    { name: "The Problem", path: "PowerOutageProblem" },
    { name: "Partners", path: "PartnerOrganizations" },
    { name: "Contact", path: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .neo-border {
          border: 4px solid #000;
        }
        
        .neo-shadow {
          box-shadow: 8px 8px 0 #000;
        }
        
        .neo-shadow-sm {
          box-shadow: 4px 4px 0 #000;
        }
        
        .neo-button {
          border: 4px solid #000;
          box-shadow: 6px 6px 0 #000;
          transition: all 0.1s;
        }
        
        .neo-button:hover {
          transform: translate(2px, 2px);
          box-shadow: 4px 4px 0 #000;
        }
        
        .neo-button:active {
          transform: translate(6px, 6px);
          box-shadow: 0 0 0 #000;
        }
      `}</style>

      {/* Header */}
      <header className="bg-[#FFED4E] neo-border border-b-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="bg-black p-2 rotate-3 group-hover:rotate-6 transition-transform">
                <Zap className="w-8 h-8 text-[#FFED4E]" strokeWidth={3} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-black leading-none">
                  WATTS UP AUSTIN
                </h1>
                <p className="text-xs md:text-sm font-medium text-black mt-1">
                  POWER FOR LIFE
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`px-4 py-2 font-bold text-sm transition-all ${
                    location.pathname === createPageUrl(item.path)
                      ? "bg-black text-[#FFED4E] neo-border"
                      : "hover:bg-black hover:text-[#FFED4E]"
                  }`}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden bg-black text-[#FFED4E] p-2 neo-border"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 space-y-2 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 font-bold text-sm neo-border ${
                    location.pathname === createPageUrl(item.path)
                      ? "bg-black text-[#FFED4E]"
                      : "bg-white hover:bg-black hover:text-[#FFED4E]"
                  }`}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white mt-20 neo-border border-t-4">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#FFED4E] mb-4">WATTS UP AUSTIN</h3>
              <p className="text-sm leading-relaxed">
                Advocating for backup power solutions for medically vulnerable Austinites.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#00F0FF]">QUICK LINKS</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className="block hover:text-[#FFED4E] transition-colors"
                  >
                    → {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#FF006E]">CONTACT</h4>
              <p className="text-sm">Austin, Texas</p>
              <p className="text-sm mt-2">contact@wattsupaustin.org</p>
            </div>
          </div>
          <div className="border-t-4 border-white mt-8 pt-8 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} WATTS UP AUSTIN. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
