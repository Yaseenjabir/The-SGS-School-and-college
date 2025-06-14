
import { ReactNode } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

interface AnimatedPageProps {
  children: ReactNode;
  className?: string;
}

const AnimatedPage = ({ children, className = '' }: AnimatedPageProps) => {
  const { ref, isInView } = useInViewAnimation(0.1);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ${
        isInView ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedPage;
