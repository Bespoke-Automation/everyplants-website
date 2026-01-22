'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavLink } from '@/lib/types';

interface HeaderProps {
  navLinks?: NavLink[];
  ctaButton?: { text: string; href: string };
}

const Header: React.FC<HeaderProps> = ({ navLinks: navLinksData, ctaButton }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll lock effect for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = navLinksData || [
    { text: 'Diensten', href: '#diensten' },
    { text: 'Assortiment', href: '#assortiment' },
    { text: 'Over ons', href: '#over-ons' },
    { text: 'Contact', href: '#contact' },
  ];

  const ctaText = ctaButton?.text || 'Partner Login';
  const ctaHref = ctaButton?.href || '#';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-cream/95 backdrop-blur-md border-sage/10 py-3' : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none z-50">
           <img
             src="/logo.png"
             alt="EveryPlants Logo"
             className="h-8 sm:h-10 md:h-14 w-auto object-contain"
           />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="text-xs font-bold uppercase tracking-widest text-sage/70 hover:text-sage transition-colors"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href={ctaHref} className="bg-sage hover:bg-sage-dark text-white px-5 lg:px-6 py-2.5 lg:py-3 text-xs font-bold uppercase tracking-widest transition-colors border border-transparent hover:border-sage-dark rounded-md">
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-sage p-2 -mr-2"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-cream z-40 transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: '100dvh' }}
      >
        <nav className="flex flex-col items-center justify-center h-full px-6 pb-20">
          <div className="space-y-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="block text-2xl sm:text-3xl font-display font-black uppercase text-sage tracking-tight py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>

          <a
            href={ctaHref}
            className="bg-sage text-white w-full max-w-xs py-4 text-center font-bold uppercase tracking-widest mt-10 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            {ctaText}
          </a>
        </nav>
      </div>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;