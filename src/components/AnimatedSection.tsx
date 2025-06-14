
import { ReactNode } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'scale-up';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-in'
}: AnimatedSectionProps) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  const animationClass = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'scale-up': 'animate-scale-up'
  };

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${delayClass} ${
        isInView ? `${animationClass[animation]} opacity-100 translate-y-0` : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
