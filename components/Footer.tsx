import React from 'react';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import type { FooterData } from '@/lib/types';

interface FooterProps {
  data?: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const address = data?.address || 'B2B Plant Fulfillment\nMiddel Broekweg 29\n2675 KB Honselersdijk\nThe Netherlands';
  const phone = data?.phone || '+31 (0)174 123 456';
  const email = data?.email || 'info@everyplants.nl';
  const certifications = data?.certifications || ['MPS-A', 'ISO 9001'];
  const sitemapLinks = data?.sitemapLinks || [
    { text: 'Diensten', href: '#diensten' },
    { text: 'Assortiment', href: '#assortiment' },
    { text: 'Over ons', href: '#over-ons' },
    { text: 'Portal Login', href: '#' },
  ];
  const legalLinks = data?.legalLinks || [
    { text: 'Algemene Voorwaarden', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Cookie Statement', href: '#' },
  ];
  const socialLinks = data?.socialLinks || [
    { platform: 'linkedin' as const, url: '#' },
    { platform: 'instagram' as const, url: '#' },
  ];
  const copyrightText = data?.copyrightText || '© 2025 EveryPlants Logistics B.V.';
  const locationTag = data?.locationTag || 'Westland, NL';
  const sitemapLabel = data?.sitemapLabel || 'Sitemap';
  const legalLabel = data?.legalLabel || 'Legal';
  const contactLabel = data?.contactLabel || 'Contact';

  return (
    <footer className="bg-sage text-cream pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 border-t border-sage">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">

          {/* Brand */}
          <div className="md:w-1/3 space-y-6 sm:space-y-8">
            <img
               src="/logo.png"
               alt="EveryPlants Logo"
               className="h-10 sm:h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-cream/60 text-xs sm:text-sm leading-relaxed max-w-xs font-mono whitespace-pre-line">
              {address}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
               {certifications.map((cert) => (
                 <div key={cert} className="border border-cream/20 px-2 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-cream/60 rounded">
                   {cert}
                 </div>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-[10px] sm:text-xs text-cream/40">{sitemapLabel}</h4>
              <ul className="space-y-3 sm:space-y-4">
                {sitemapLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-cream hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1 group"
                    >
                      {link.text}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-[10px] sm:text-xs text-cream/40">{legalLabel}</h4>
              <ul className="space-y-3 sm:space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-cream/60 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6 col-span-2 md:col-span-1">
              <h4 className="font-bold uppercase tracking-widest text-[10px] sm:text-xs text-cream/40">{contactLabel}</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-cream/80 font-mono">
                <li>{phone}</li>
                <li className="break-all">{email}</li>
                <li className="pt-2 sm:pt-4 flex gap-4">
                    {socialLinks.map((social) => (
                      <a key={social.platform} href={social.url} className="hover:text-white transition-colors p-1" target="_blank" rel="noopener noreferrer">
                        {social.platform === 'linkedin' && <Linkedin size={20} />}
                        {social.platform === 'instagram' && <Instagram size={20} />}
                      </a>
                    ))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-cream/30 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-center md:text-left">{copyrightText}</p>
          <div className="text-cream/30 text-[10px] sm:text-xs font-mono">
            {locationTag}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;