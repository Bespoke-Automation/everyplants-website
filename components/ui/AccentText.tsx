interface AccentTextProps {
  children: React.ReactNode
  className?: string
}

export function AccentText({ children, className = '' }: AccentTextProps) {
  return (
    <span className={`font-accent ${className}`}>
      {children}
    </span>
  )
}
