"use client"
import React, { useState } from 'react'
import './hover-transition.css'

export function HoverTransition({
  effect = 'wipe',
  direction = 'right',
  duration = 0.72,
  defaultComponent,
  hoverComponent,
  className = '',
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`hover-transition-root effect-${effect} ${className} ${isHovered ? 'hover-active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--hover-duration': `${duration}s`,
      }}
    >
      <div className="hover-transition-layer default-layer">
        {defaultComponent}
      </div>
      <div className={`hover-transition-layer hover-layer dir-${direction}`} aria-hidden={!isHovered}>
        {hoverComponent}
      </div>
    </div>
  )
}

export default HoverTransition
