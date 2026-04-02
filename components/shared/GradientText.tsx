import React from 'react'

type GradientTextTag = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: GradientTextTag
}

export default function GradientText({ children, className = '', as: Tag = 'span' }: GradientTextProps) {
  return (
    <Tag className={`gradient-text ${className}`}>
      {children}
    </Tag>
  )
}
