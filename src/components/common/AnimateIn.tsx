import { ReactNode } from 'react'

interface AnimateInProps {
  children: ReactNode
  className?: string
  animation?: string
  delay?: number
}

export function AnimateIn({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimateInProps) {
  return (
    <div 
      data-aos={animation}
      data-aos-delay={delay}
      className={className}
    >
      {children}
    </div>
  )
} 