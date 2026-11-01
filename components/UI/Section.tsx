import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  /** use h1 for the page's main title */
  as?: 'h1' | 'h2';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', dark = false, as = 'h2', id }) => {
  const Heading = as;
  return (
    <section id={id} className={`py-14 md:py-20 ${dark ? 'bg-slate-50' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10 md:mb-14 text-center">
            {title && <Heading className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</Heading>}
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
