'use client'

import React from 'react'

interface MarqueeProps {
  items: string[]
  direction?: 'left' | 'right'
  speed?: number
}

export const Marquee: React.FC<MarqueeProps> = ({ items, direction = 'left', speed = 20 }) => {
  return (
    <div
      className="relative flex overflow-hidden bg-sage border-b border-sage/20 py-4"
      style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
    >
      <div className={`animate-marquee whitespace-nowrap flex gap-12 ${direction === 'right' ? 'direction-reverse' : ''}`}>
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="text-4xl md:text-5xl font-display font-black uppercase text-cream/90 mx-6 tracking-tighter opacity-40">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}