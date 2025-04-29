import React from 'react';
import { Lightbulb, LineChart, Zap } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Introduction: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: 'Problem',
      description: 'Bangladesh faces frequent load shedding due to inefficient power distribution and inaccurate demand forecasting.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-teal-500" />,
      title: 'Solution',
      description: 'Deep learning models to accurately predict electricity demand across different regions of Bangladesh.'
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'Impact',
      description: 'Better forecasting enables improved grid planning, reduced load shedding, and more efficient energy distribution.'
    }
  ];

  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Introduction</SectionTitle>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            This project aims to improve electricity demand forecasting in Bangladesh using deep learning techniques. 
            By leveraging historical data from the Bangladesh Power Development Board (BPDB), we've developed 
            models that can predict daily energy demand with high accuracy, helping to address inefficiencies 
            in power distribution and reduce the frequency of load shedding events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;