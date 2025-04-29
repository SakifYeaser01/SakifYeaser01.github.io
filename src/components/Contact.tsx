import React from 'react';
import { User, Mail, Building, Calendar } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Contact: React.FC = () => {
  const teamMembers = [
    { id: "200021101", name: "Sakif Yeaser" },
    { id: "200021113", name: "Tasnia Nafs" },
    { id: "200021114", name: "Md. Ikram Hossain" }
  ];

  const details = [
    { 
      icon: <Building className="h-5 w-5 text-blue-600" />,
      label: "Institution",
      value: "Islamic University of Technology (IUT), OIC"
    },
    { 
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      label: "Course",
      value: "EEE 4709 – Artificial Intelligence and Machine Learning"
    },
    { 
      icon: <User className="h-5 w-5 text-blue-600" />,
      label: "Instructor",
      value: "Md. Arefin Rabbi Emon"
    },
    { 
      icon: <Calendar className="h-5 w-5 text-blue-600" />,
      label: "Submission Date",
      value: "March 21, 2025"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Contact Information</SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Group A6 Members</h3>
                
                <ul className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-700 font-medium">{member.name.charAt(0)}</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium text-slate-900">{member.name}</p>
                        <p className="text-sm text-slate-500">ID: {member.id}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/2 p-8 bg-slate-50">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Project Details</h3>
                
                <ul className="space-y-4">
                  {details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {detail.icon}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-slate-500">{detail.label}</p>
                        <p className="text-base text-slate-900">{detail.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              For more information about this research, please contact the team members directly through the university.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;