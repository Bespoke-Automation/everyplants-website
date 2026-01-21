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

  return (
    <footer className="bg-sage text-cream pt-24 pb-12 border-t border-sage">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
          
          {/* Brand */}
          <div className="md:w-1/3 space-y-8">
            <img
               src="/logo.png"
               alt="EveryPlants Logo"
               className="h-12 md:h-16 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs font-mono whitespace-pre-line">
              {address}
            </p>
            <div className="flex gap-4 pt-4">
               {certifications.map((cert) => (
                 <div key={cert} className="border border-cream/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-cream/60 rounded">
                   {cert}
                 </div>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12">

            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Sitemap</h4>
              <ul className="space-y-4">
                {sitemapLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-cream hover:text-white text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1 group"
                    >
                      {link.text}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Legal</h4>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-cream/60 hover:text-white text-sm transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Contact</h4>
              <ul className="space-y-4 text-sm text-cream/80 font-mono">
                <li>{phone}</li>
                <li>{email}</li>
                <li className="pt-4 flex gap-4">
                    {socialLinks.map((social) => (
                      <a key={social.platform} href={social.url} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
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
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs uppercase tracking-widest font-bold">{copyrightText}</p>
          <div className="text-cream/30 text-xs font-mono">
            {locationTag}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;