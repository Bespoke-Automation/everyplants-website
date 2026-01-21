'use client'

import React, { useState } from 'react';
import { ArrowRight, Package, Truck, Quote, Star, MousePointer2, Box } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { urlFor } from '@/sanity/lib/image';
import type {
  HeroSection,
  TrustBarData,
  ValuePropsData,
  HowItWorksData,
  AssortmentData,
  AboutData,
  Stat,
  Testimonial as TestimonialType,
  CTAData,
} from '@/lib/types';

// --- Rotating Badge Component ---
const RotatingBadge = () => (
  <div className="absolute top-0 right-0 md:-right-8 md:-top-8 z-20 hidden md:block">
    <div className="relative w-32 h-32 animate-[spin_10s_linear_infinite]">
       <svg viewBox="0 0 100 100" width="128" height="128" className="w-full h-full fill-sage">
         <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
         <text className="fill-sage font-bold text-[10px] uppercase tracking-[2px]">
           <textPath href="#circlePath" startOffset="0%">
             Premium Logistics • Westland Base •
           </textPath>
         </text>
       </svg>
       <div className="absolute inset-0 flex items-center justify-center">
         <Star className="text-sage w-6 h-6 fill-sage" />
       </div>
    </div>
  </div>
);

// --- Hero Section ---
interface HeroProps {
  data?: HeroSection;
}

export const Hero = ({ data }: HeroProps) => {
  const badge = data?.badge || 'B2B Plant Fulfillment';
  const headlineLines = data?.headlineLines || ['Everyday', 'Everywhere'];
  const highlightedLine = data?.highlightedLine || 'EveryPlants';
  const tagline = data?.tagline || 'De logistieke ruggengraat voor jouw plantenwebshop. Assortiment, warehousing en distributie direct vanuit het Westland.';
  const ctaText = data?.ctaText || 'Ontdek Services';
  const ctaLink = data?.ctaLink || '#diensten';
  const imageUrl = data?.heroImage
    ? urlFor(data.heroImage).width(1600).quality(80).url()
    : 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1600&auto=format&fit=crop';
  const imageCaption = data?.imageCaption || 'Direct Source: Westland';

  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-32 bg-cream min-h-[90vh] flex items-center border-b border-sage/10 overflow-x-clip">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Text Column */}
          <div className="lg:w-1/2 space-y-10 z-10 relative">
            <FadeIn>
              <div className="inline-block border border-sage/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sage mb-4 rounded-md">
                {badge}
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-sage leading-[0.85]">
                {headlineLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <span className="text-sage/40">{highlightedLine}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-sage/80 font-sans font-medium max-w-lg leading-relaxed border-l-4 border-sage pl-6">
                {tagline}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-0 pt-4">
                <a href={ctaLink} className="bg-sage hover:bg-sage-dark text-white px-10 py-5 text-base font-bold uppercase tracking-wider transition-all hover:translate-x-1 flex items-center justify-center gap-4 group rounded-md">
                  {ctaText}
                  <ArrowRight size={18} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative animate-in fade-in zoom-in duration-1000">
              <RotatingBadge />
              <div className="aspect-[4/5] relative overflow-hidden shadow-2xl border-2 border-sage/10 bg-sage/5 rounded-lg">
                <img
                  src={imageUrl}
                  alt="Modern industrial greenhouse facility"
                  className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 bg-white border-t border-r border-sage/20 px-6 py-4 text-sage font-bold uppercase text-xs tracking-widest z-10 rounded-tr-md">
                  {imageCaption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Logo Trust Bar ---
interface TrustBarProps {
  data?: TrustBarData;
}

export const TrustBar = ({ data }: TrustBarProps) => {
  const label = data?.label || 'Trusted Partners';
  const partners = data?.partners || [
    { _id: '1', name: 'Intratuin' },
    { _id: '2', name: 'Bol.com' },
    { _id: '3', name: 'Amazon' },
    { _id: '4', name: 'Floriade' },
    { _id: '5', name: 'Keukenhof' },
  ];

  return (
    <div className="bg-cream border-b border-sage/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="text-xs font-bold tracking-widest text-sage/50 uppercase whitespace-nowrap">
            {label}
          </div>
          <div className="h-px w-full bg-sage/10 hidden md:block" />
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12 w-full">
            {partners.map((partner) => (
              <div key={partner._id} className="text-xl font-display font-bold uppercase text-sage/40 hover:text-sage transition-colors cursor-pointer">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Interactive Accordion Value Props ---
interface ValuePropsProps {
  data?: ValuePropsData;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Box':
      return <Box strokeWidth={1.5} size={32} />;
    case 'Package':
      return <Package strokeWidth={1.5} size={32} />;
    case 'Truck':
      return <Truck strokeWidth={1.5} size={32} />;
    default:
      return <Box strokeWidth={1.5} size={32} />;
  }
};

export const ValueProps = ({ data }: ValuePropsProps) => {
  const [activeId, setActiveId] = useState<number>(1);

  const defaultImages = [
    'https://images.unsplash.com/photo-1628135899981-d70a36a7a513?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2672&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2565&auto=format&fit=crop',
  ];

  const defaultItems: Array<{ icon: string; title: string; subtitle: string; description: string; image?: unknown }> = [
    { icon: 'Box', title: 'Assortiment', subtitle: "500+ SKU's", description: 'Directe API-koppeling met de grootste kwekers van Europa. Exclusief aanbod, direct beschikbaar.' },
    { icon: 'Package', title: 'Warehousing', subtitle: 'Climate Controlled', description: 'Geconditioneerde opslag in onze 5ha faciliteit. Voorraadbeheer en kwaliteitscontrole inbegrepen.' },
    { icon: 'Truck', title: 'Fulfillment', subtitle: 'Next Day Delivery', description: 'Pick, pack en ship service. Volledige white-label integratie met tracking voor jouw klant.' },
  ];

  const items = data?.items || defaultItems;
  const title = data?.title || 'Full Service';
  const subtitle = data?.subtitle || 'Solutions';

  return (
    <section id="diensten" className="py-24 bg-cream border-b border-sage/10">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-sage pb-6">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-sage tracking-tighter">
              {title}
              <br />
              {subtitle}
            </h2>
            <div className="flex items-center gap-2 text-sage mt-4 md:mt-0 font-mono text-xs uppercase">
              <MousePointer2 size={14} />
              <span>Interact to explore</span>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row h-[600px] w-full border border-sage/10 bg-white rounded-lg overflow-hidden">
          {items.map((prop, idx) => {
            const imgUrl = prop.image ? urlFor(prop.image).width(800).quality(80).url() : defaultImages[idx] || defaultImages[0];
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveId(idx)}
                className={`relative overflow-hidden transition-all duration-500 ease-out cursor-pointer group border-r border-sage/10 last:border-r-0 ${
                  activeId === idx ? 'flex-[3] bg-sage text-cream' : 'flex-1 bg-white text-sage'
                }`}
              >
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeId === idx ? 'opacity-20' : 'opacity-0'}`}>
                  <img src={imgUrl} alt={prop.title} className="w-full h-full object-cover grayscale" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`p-2 border border-current rounded-md ${activeId === idx ? 'bg-cream/10' : 'bg-sage/5'}`}>
                      {getIcon(prop.icon)}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="uppercase tracking-widest text-[10px] font-bold mb-2 block opacity-70">{prop.subtitle}</span>
                    <h3 className="text-2xl md:text-4xl font-display font-bold uppercase mb-4 whitespace-nowrap tracking-tight">{prop.title}</h3>
                    <div className={`overflow-hidden transition-all duration-500 ${activeId === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm md:text-base leading-relaxed max-w-md opacity-90 font-medium">{prop.description}</p>
                      <div className="mt-6 flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
                        Meer info <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- How It Works (Stacking Cards) ---
interface HowItWorksProps {
  data?: HowItWorksData;
}

export const HowItWorks = ({ data }: HowItWorksProps) => {
  const defaultImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616616428675-9b76c8137351?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop',
  ];

  const defaultSteps: Array<{ number: string; title: string; description: string; image?: unknown }> = [
    { number: '01', title: 'Connect', description: 'Naadloze API integratie met Shopify, WooCommerce of Magento. Real-time voorraad synchronisatie binnen 5 minuten.' },
    { number: '02', title: 'Select', description: 'Curate jouw assortiment uit onze database van 500+ premium soorten. Directe inkoop bij de kweker.' },
    { number: '03', title: 'Scale', description: 'Focus op marketing en groei. Wij verwerken orders automatisch zodra ze binnenkomen in het dashboard.' },
    { number: '04', title: 'Deliver', description: 'Pick & pack in onze beschermende verpakking. Cut-off tijd 23:59 voor next-day delivery in de Benelux.' },
  ];

  const steps = data?.steps || defaultSteps;
  const title = data?.title || 'Workflow';
  const subtitle = data?.subtitle || 'Systematisch van installatie tot levering.';

  return (
    <section className="py-32 bg-sage text-cream border-t border-b border-sage/20">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-cream/20 pb-8">
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter">{title}</h2>
            <p className="text-cream/60 text-sm font-mono uppercase tracking-widest max-w-sm text-right mt-4 md:mt-0">{subtitle}</p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto relative pb-24">
          {steps.map((step, idx) => {
            const imgUrl = step.image ? urlFor(step.image).width(1200).quality(80).url() : defaultImages[idx] || defaultImages[0];
            return (
              <div
                key={idx}
                className="sticky transition-all duration-300"
                style={{
                  top: `${140 + idx * 50}px`,
                  marginBottom: `${(steps.length - idx - 1) * 20}px`,
                  zIndex: idx + 1,
                }}
              >
                <div className="bg-cream text-sage p-0 h-[450px] md:h-[500px] flex flex-col md:flex-row shadow-2xl border border-sage/20 overflow-hidden relative rounded-lg">
                  <div className="w-full md:w-1/2 p-8 md:p-12 relative z-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-sage/10">
                    <div className="flex justify-between items-start">
                      <span className="text-5xl md:text-7xl font-display font-black text-sage/10 select-none">{step.number}</span>
                      <div className="p-2 border border-sage/10 rounded-md">
                        <ArrowRight className="rotate-45" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4 tracking-tight">{step.title}</h3>
                      <p className="text-sage/80 text-lg font-medium leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 h-full relative group overflow-hidden">
                    <img src={imgUrl} alt={step.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-sage/10 mix-blend-multiply" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Staggered Masonry Assortment ---
interface AssortmentProps {
  data?: AssortmentData;
}

export const Assortment = ({ data }: AssortmentProps) => {
  const defaultImages = [
    'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1364&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599598425947-320d3d52623d?q=80&w=1336&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2672&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509423355108-74d90291f271?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop',
  ];

  const defaultHeights = ['h-80 md:h-[500px]', 'h-64 md:h-[400px]', 'h-72 md:h-[450px]', 'h-64 md:h-[380px]', 'h-80 md:h-[480px]'];

  const defaultCategories: Array<{ name: string; height?: string; image?: unknown }> = [
    { name: 'Kamerplanten' },
    { name: 'Grote Maten' },
    { name: 'Hydrocultuur' },
    { name: 'Kunstplanten' },
    { name: 'Kantoor' },
  ];

  const categories = data?.categories || defaultCategories;
  const title = data?.title || 'Catalogus';
  const description = data?.description || 'Een greep uit onze B2B collectie. Bekijk de volledige database in het portaal.';
  const ctaText = data?.ctaText || 'Open Portal';
  const ctaLink = data?.ctaLink || '#';

  return (
    <section id="assortiment" className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-sage/10 pb-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-sage tracking-tighter">{title}</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col items-end">
              <div className="max-w-xs text-sage/70 mb-4 text-right text-sm font-medium">{description}</div>
              <a href={ctaLink} className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-sage-dark transition-colors rounded-md">
                {ctaText} <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {categories.map((cat, idx) => {
            const imgUrl = cat.image ? urlFor(cat.image).width(800).quality(80).url() : defaultImages[idx] || defaultImages[0];
            const height = cat.height || defaultHeights[idx] || 'h-72 md:h-[400px]';
            return (
              <FadeIn key={idx} delay={idx * 100}>
                <div className={`group relative ${height} w-full overflow-hidden bg-sage/5 cursor-pointer break-inside-avoid border border-sage/5 hover:border-sage/30 transition-all duration-300 rounded-lg`}>
                  <img src={imgUrl} alt={cat.name} className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-sage/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-lg">
                    <div className="flex items-center justify-between text-white">
                      <span className="font-display font-bold uppercase tracking-wider">{cat.name}</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- About ---
interface AboutProps {
  data?: AboutData;
}

export const About = ({ data }: AboutProps) => {
  const label = data?.label || 'Over EveryPlants';
  const title = data?.title || 'Built for\nScale';
  const description = data?.description || 'Vanuit onze high-tech faciliteit in Honselersdijk bedienen wij de Europese e-commerce markt. Geen romantisch verhaal, maar strakke processen en gegarandeerde kwaliteit.';
  const imgUrl = data?.image ? urlFor(data.image).width(1200).quality(80).url() : 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop';
  const imageBadge = data?.imageBadge || { value: '05', label: 'Hectare' };
  const features = data?.features || [
    { title: 'Klimaatneutraal', description: '100% Elektrisch wagenpark' },
    { title: 'Dagelijkse Aanvoer', description: '08:00u Vers van de klok' },
    { title: 'Account Management', description: 'Vast aanspreekpunt' },
  ];
  const linkText = data?.linkText || 'Company Profile';
  const linkHref = data?.linkHref || '#';

  return (
    <section id="over-ons" className="bg-white py-32 border-t border-sage/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-stretch">
          <div className="md:w-1/2 order-2 md:order-1 relative min-h-[400px]">
            <FadeIn className="h-full">
              <div className="relative h-full w-full border border-sage/10 bg-sage/5 p-4 rounded-lg">
                <img src={imgUrl} alt="Warehouse Interior" className="w-full h-full object-cover grayscale contrast-125" />
                <div className="absolute top-8 right-8 bg-sage text-white p-4 text-center border border-white/20 shadow-xl rounded-md">
                  <div className="text-3xl font-display font-bold">{imageBadge.value}</div>
                  <div className="text-[10px] uppercase tracking-widest">{imageBadge.label}</div>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex flex-col justify-center">
            <FadeIn>
              <div className="text-xs font-bold uppercase tracking-widest text-sage/50 mb-4">{label}</div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-sage mb-8 uppercase tracking-tighter leading-none whitespace-pre-line">{title}</h2>
              <p className="text-sage/80 text-lg leading-relaxed mb-8 font-medium max-w-md">{description}</p>
              <div className="grid grid-cols-1 gap-4 mb-10 border-t border-sage/10 pt-6">
                {features.map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-sage/10 pb-4">
                    <span className="font-bold text-sage uppercase text-sm tracking-wide">{item.title}</span>
                    <span className="text-sage/50 text-xs font-mono text-right">{item.description}</span>
                  </div>
                ))}
              </div>
              <div>
                <a href={linkHref} className="text-sage font-bold uppercase tracking-widest border-b-2 border-sage pb-1 hover:text-sage-dark hover:border-sage-dark transition-colors">
                  {linkText}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Stats ---
interface StatsProps {
  data?: Stat[];
}

export const Stats = ({ data }: StatsProps) => {
  const stats = data || [
    { value: '50K', label: 'M² Warehousing' },
    { value: '500+', label: "Actieve SKU's" },
    { value: '125', label: 'Partners' },
  ];

  return (
    <section className="py-20 bg-sage text-cream border-t border-cream/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-cream/10 border border-cream/10 rounded-lg overflow-hidden">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="p-12 text-center group hover:bg-white/5 transition-colors">
              <div className="text-5xl md:text-7xl font-display font-black mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-cream/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Testimonial ---
interface TestimonialProps {
  data?: TestimonialType;
}

export const Testimonial = ({ data }: TestimonialProps) => {
  const quote = data?.quote || 'Toen onze vorige partner stopte, had EveryPlants ons binnen 48 uur operationeel. Professioneel, data-driven en stipt.';
  const authorName = data?.authorName || 'J. de Vries';
  const authorTitle = data?.authorTitle || 'CEO';
  const authorCompany = data?.authorCompany || 'Plantura Group';

  return (
    <section className="py-32 bg-cream border-b border-sage/10">
      <div className="container mx-auto px-6 max-w-4xl text-center relative">
        <FadeIn>
          <div className="mb-8 flex justify-center">
            <Quote size={48} className="text-sage/20 fill-sage/10" />
          </div>
          <blockquote className="text-2xl md:text-4xl font-display font-bold leading-tight mb-12 text-sage uppercase tracking-tight">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div className="flex flex-col items-center justify-center gap-2">
            <cite className="not-italic font-bold block text-lg text-sage uppercase tracking-widest">{authorName}</cite>
            <span className="text-sage/50 text-sm font-mono uppercase">
              {authorTitle}
              {authorCompany && `, ${authorCompany}`}
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- CTA ---
interface CTAProps {
  data?: CTAData;
}

export const CTA = ({ data }: CTAProps) => {
  const title = data?.title || 'Ready to\nScale?';
  const subtitle = data?.subtitle || 'Geen wachttijden. Directe integratie.';
  const primaryButton = data?.primaryButton || { text: 'Word Partner', href: '#' };
  const secondaryButton = data?.secondaryButton || { text: 'Sales Contact', href: '#contact' };

  return (
    <section id="contact" className="py-32 bg-sage relative overflow-hidden flex items-center justify-center min-h-[50vh]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className="text-5xl md:text-8xl font-display font-black text-cream mb-8 uppercase tracking-tighter whitespace-pre-line">{title}</h2>
          <p className="text-cream/60 text-lg mb-12 max-w-xl mx-auto font-medium">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={primaryButton.href} className="bg-cream text-sage hover:bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-xl rounded-md">
              {primaryButton.text}
            </a>
            <a href={secondaryButton.href} className="bg-transparent border border-cream/20 text-cream hover:bg-cream/10 px-10 py-5 text-sm font-bold uppercase tracking-widest transition-colors rounded-md">
              {secondaryButton.text}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};