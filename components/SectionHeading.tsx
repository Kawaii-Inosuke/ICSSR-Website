import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  light = false
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg font-sans leading-relaxed max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-cream-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-bronze-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};