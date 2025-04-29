import React from 'react';
import { CheckCircle, BarChart2, MapPin } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Results: React.FC = () => {
  const modelResults = [
    { name: "LSTM", mae: 741.23, accuracy: "92.3%" },
    { name: "BiLSTM", mae: 702.45, accuracy: "93.1%" },
    { name: "GRU", mae: 693.82, accuracy: "93.4%" },
    { name: "BiGRU", mae: 667.76, accuracy: "94.2%" }
  ];

  const regions = [
    { name: "Dhaka", percentage: "96%" },
    { name: "Chattogram", percentage: "93%" },
    { name: "Khulna", percentage: "91%" },
    { name: "Sylhet", percentage: "89%" },
    { name: "Rajshahi", percentage: "90%" },
    { name: "Rangpur", percentage: "88%" }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Results</SectionTitle>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            Our analysis revealed that the BiGRU model achieved the best accuracy among all tested approaches. 
            The models were evaluated using Mean Absolute Error (MAE) metrics, with lower values indicating better performance.
            Regional forecasting was also conducted to provide targeted insights for different divisions of Bangladesh.
          </p>
        </div>
        
        {/* Model Comparison */}
        <div className="bg-slate-50 rounded-xl p-8 shadow-sm mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
            <BarChart2 className="mr-2 h-6 w-6 text-blue-600" />
            Model Performance Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-200">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Model</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Mean Absolute Error</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Accuracy</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {modelResults.map((model, index) => (
                  <tr key={index} className={model.name === "BiGRU" ? "bg-blue-50" : ""}>
                    <td className="px-6 py-4 text-sm text-slate-800 font-medium">
                      {model.name}
                      {model.name === "BiGRU" && 
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Best
                        </span>
                      }
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-800">{model.mae}</td>
                    <td className="px-6 py-4 text-sm text-slate-800">{model.accuracy}</td>
                    <td className="px-6 py-4 text-sm text-slate-800">
                      {model.name === "BiGRU" ? 
                        <span className="text-green-600 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" /> Selected
                        </span> : 
                        <span className="text-slate-500">Evaluated</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Regional Forecasting */}
        <div className="bg-slate-50 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
            <MapPin className="mr-2 h-6 w-6 text-blue-600" />
            Regional Forecast Accuracy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-slate-800 mb-3">{region.name}</h4>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: region.percentage }}
                  ></div>
                </div>
                <p className="mt-2 text-right text-sm text-slate-600">Accuracy: {region.percentage}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-slate-700">
              <strong>Impact:</strong> These regional forecasts enable targeted load management, 
              allowing power authorities to prioritize resources based on local demand patterns and reduce 
              the frequency and duration of load shedding events across Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;