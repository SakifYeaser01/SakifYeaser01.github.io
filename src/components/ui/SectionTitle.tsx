import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 inline-block relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform -translate-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;