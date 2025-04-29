import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Zap className={`h-6 w-6 ${isScrolled ? 'text-blue-700' : 'text-white'} mr-2`} />
          <span className={`font-bold ${isScrolled ? 'text-blue-700' : 'text-white'} text-xl`}>Energy Forecast</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['Introduction', 'Methodology', 'Results', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={`${
                    isScrolled ? 'text-slate-700 hover:text-blue-700' : 'text-white hover:text-yellow-300'
                  } font-medium transition-colors duration-200`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;