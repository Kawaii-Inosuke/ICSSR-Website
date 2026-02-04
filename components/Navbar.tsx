import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'The Project', path: '/project' },
    { name: 'Research & Impact', path: '/research' },
    { name: 'Events', path: '/events' },
    { name: 'People', path: '/people' },
    { name: 'Opportunities', path: '/opportunities' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo Section */}
          <NavLink to="/" className="flex items-center gap-4">
            {/* Logos SVG */}
            <img
              src="/assets/logo/Tharma AI logo.svg"
              alt="Tharma AI Logo"
              className="h-12 w-auto"
            />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-serif font-bold text-navy-900 text-2xl">
                Tharma AI
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-1 ${isActive ? 'text-navy-900 border-b-2 border-bronze-500' : 'text-gray-600 hover:text-navy-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="text-navy-900 text-sm font-medium hover:text-bronze-600 transition flex items-center gap-1 border border-navy-900 px-4 py-2 rounded hover:bg-navy-900 hover:text-white"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-navy-900 hover:text-bronze-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-4 rounded-md text-base font-medium ${isActive
                    ? 'bg-cream-200 text-navy-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="border-t border-gray-100 mt-4 pt-4 px-3">
              <button className="w-full text-left text-bronze-600 font-bold text-sm flex items-center gap-2">
                Staff Login <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};