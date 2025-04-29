import React from 'react';
import { Database, FileText, BarChart, Cpu } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <Database className="h-10 w-10 text-blue-600" />,
      title: "Data Collection",
      description: "Daily load generation PDFs were scraped from the Bangladesh Power Development Board (BPDB) website using Python tools and packages to extract relevant metrics."
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-600" />,
      title: "Preprocessing",
      description: "Data preprocessing involved handling missing values, creating holiday categories, and engineering features like previous day's demand and temperature records."
    },
    {
      icon: <BarChart className="h-10 w-10 text-indigo-600" />,
      title: "Feature Engineering",
      description: "We engineered temporal features (day of week, month), incorporated holiday data, and added lag features from previous periods to improve prediction accuracy."
    },
    {
      icon: <Cpu className="h-10 w-10 text-purple-600" />,
      title: "Model Development",
      description: "Four deep learning models were trained: LSTM, BiLSTM, GRU, and BiGRU. Bayesian optimization was used for hyperparameter tuning to maximize performance."
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Methodology</SectionTitle>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-slate-700 leading-relaxed">
            Our approach combines data engineering, preprocessing, and advanced deep learning techniques to create 
            accurate forecasting models. We followed a systematic process to ensure high-quality predictions for
            energy demand across Bangladesh.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2" />
          
          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                  {/* Step content */}
                  <div className="md:w-1/2 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                        {step.title}
                      </h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="bg-white rounded-full p-3 border-4 border-blue-200 z-10">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Mobile icon - visible only on mobile */}
                  <div className="md:hidden flex justify-center my-4">
                    <div className="bg-white rounded-full p-3 border-4 border-blue-200">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Empty space for alternate layout */}
                  <div className="md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;