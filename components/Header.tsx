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
        scrolled ? 'bg-cream/95 backdrop-blur-md border-sage/10 py-3' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
           <img
             src="/logo.png"
             alt="EveryPlants Logo"
             className="h-10 md:h-14 w-auto object-contain"
           />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
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
          <a href={ctaHref} className="bg-sage hover:bg-sage-dark text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors border border-transparent hover:border-sage-dark rounded-md">
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-sage">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-b border-sage/10 p-6 flex flex-col space-y-4 shadow-lg h-screen">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="text-3xl font-display font-black uppercase text-sage tracking-tight"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <a href={ctaHref} className="bg-sage text-white w-full py-4 text-center font-bold uppercase tracking-widest mt-8 rounded-md">
            {ctaText}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;