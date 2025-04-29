import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-slate-900/90" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Forecasting Daily Energy Demand and Load Shedding for Bangladesh Using LSTM
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
          Improving electricity distribution efficiency through advanced deep learning techniques
        </p>
        
        <div className="mt-12">
          <a 
            href="#introduction" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-400 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;