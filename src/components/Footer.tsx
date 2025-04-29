import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Zap className="h-6 w-6 text-yellow-400 mr-2" />
            <span className="font-bold text-xl">Energy Forecast</span>
          </div>
          
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Islamic University of Technology. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>
            This project was developed as part of the EEE 4709 – Artificial Intelligence and Machine Learning course.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;