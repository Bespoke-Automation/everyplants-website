import React from 'react';
import { Linkedin, Instagram, MapPin, Phone, Mail, Award, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
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
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs font-mono">
              B2B Plant Fulfillment<br/>
              Middel Broekweg 29<br/>
              2675 KB Honselersdijk<br/>
              The Netherlands
            </p>
            <div className="flex gap-4 pt-4">
               {/* Cert Badges - Minimal */}
               <div className="border border-cream/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-cream/60 rounded">MPS-A</div>
               <div className="border border-cream/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-cream/60 rounded">ISO 9001</div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Sitemap</h4>
              <ul className="space-y-4">
                {['Diensten', 'Assortiment', 'Over ons', 'Portal Login'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-cream hover:text-white text-sm font-bold uppercase tracking-wide transition-colors flex items-center gap-1 group">
                      {item}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Legal</h4>
              <ul className="space-y-4">
                {['Algemene Voorwaarden', 'Privacy Policy', 'Cookie Statement'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-cream/60 hover:text-white text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-cream/40">Contact</h4>
              <ul className="space-y-4 text-sm text-cream/80 font-mono">
                <li>+31 (0)174 123 456</li>
                <li>info@everyplants.nl</li>
                <li className="pt-4 flex gap-4">
                    <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs uppercase tracking-widest font-bold">© 2025 EveryPlants Logistics B.V.</p>
          <div className="text-cream/30 text-xs font-mono">
            Westland, NL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;