'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';
import { Logo } from '@/components/brand-assets/logo';
import { NAV_ITEMS } from '@/config/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // This handler prevents navigation
  const handleClick = (e: React.MouseEvent) => e.preventDefault();

  return (
    <header className="w-full flex justify-center pt-6 relative z-50">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] max-w-6xl bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <a href="#" aria-label="Home">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex gap-6 lg:gap-8 text-base font-medium text-gray-400"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={handleClick}
              className="transition-colors duration-200 hover:text-gray-900 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button>Contact Sales</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 p-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] bg-white shadow-md mt-2 rounded-lg overflow-hidden z-40"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-2 p-4 text-gray-700">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={(e) => {
                  handleClick(e);
                  closeMenu();
                }}
                className="py-2 px-4 rounded hover:bg-gray-100 transition cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2">
              <Button className="w-full">Contact Sales</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
