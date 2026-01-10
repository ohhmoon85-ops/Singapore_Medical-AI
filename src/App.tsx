import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell, PieChart, Pie, Legend 
} from 'recharts';

// UI Helper Components
const Header = () => (
  <header className="bg-[#003366] text-white p-4 sticky top-0 z-50 shadow-md">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <i className="fas fa-heart-pulse text-2xl text-red-400"></i>
        <span className="font-bold text-xl tracking-tight uppercase">Medical AI</span>
      </div>
      <div className="hidden md:block text-sm font-medium opacity-80">
        Singapore Strategic Proposal 2026
      </div>
    </div>
  </header>
);

const Section = ({ id, title, subtitle, coreMessage, visualizationDesc, points, children }: any) => (
  <section id={id} className="min-h-screen py-12 px-4 border-b border-slate-200 scroll-mt-20">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-[#003366]">{title}</h2>
        <p className="text-lg text-slate-500 font-medium">{subtitle}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-bold text-[#003366] uppercase tracking-widest mb-2 flex items-center">
          <i className="fas fa-bullseye mr-2"></i> Core Message
        </h4>
        <p className="text-xl text-slate-800 font-semibold leading-relaxed">
          {coreMessage}
        </p>
      </div>

      <div className="bg-slate-900 text-slate-300 p-6 rounded-xl shadow-inner overflow-hidden">
        <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center text-slate-400">
          <i className="fas fa-chart-line mr-2"></i> Visualization & Simulation
        </h4>
        <div className="mb-6">{children}</div>
        <p className="text-sm italic leading-relaxed bg-slate-800 p-4 rounded-lg border-l-4 border-[#C5A059]">
          <strong>Visual Elements:</strong> {visualizationDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
          <h5 className="font-bold text-blue-800 mb-2 flex items-center">
            <i className="fas fa-user-md mr-2"></i> For Clinicians
          </h5>
          <p className="text-sm text-blue-900 leading-snug">{points.doctor}</p>
        </div>
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
          <h5 className="font-bold text-emerald-800 mb-2 flex items-center">
            <i className="fas fa-hospital-user mr-2"></i> For Management
          </h5>
          <p className="text-sm text-emerald-900 leading-snug">{points.management}</p>
        </div>
        <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
          <h5 className="font-bold text-amber-800 mb-2 flex items-center">
            <i className="fas fa-clinic-medical mr-2"></i> For GP Clinics
          </h5>
          <p className="text-sm text-amber-900 leading-snug">{points.clinic}</p>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('problem');

  const icebergData = [
    { name: 'Diagnosed', value: 10, fill: '#C5A059' },
    { name: 'Undiagnosed', value: 50, fill: '#3b82f6' },
    { name: 'Risk Pool', value: 40, fill: '#1e293b' },
  ];

  const workflowData = [
    { name: 'Conventional', time: 180, color: '#94a3b8' },
    { name: 'AI-ECG', time: 1, color: '#ef4444' },
  ];

  const accuracyData = [
    { ethnic: 'Chinese', auroc: 0.919 },
    { ethnic: 'Malay', auroc: 0.912 },
    { ethnic: 'Indian', auroc: 0.908 },
  ];

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans">
      <Header />

      {/* Hero Section - 색상 대비 강화 */}
      <section className="bg-[#003366] text-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unlocking the Future of <span className="text-[#C5A059]">Preventive Cardiology</span>
          </h1>
          <p className="text-xl opacity-90 font-light text-slate-200">
            Empowering Healthier SG with AI-Driven Early Cardiac Diagnosis
          </p>
          <div className="pt-8">
             <button 
               onClick={() => handleNavClick('problem')}
               className="bg-[#C5A059] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:brightness-110 transition-all uppercase tracking-wide"
             >
               Start Presentation
             </button>
          </div>
        </div>
      </section>

      {/* Slide 1: Iceberg Chart - 높이 오류 해결 */}
      <Section 
        id="problem"
        title="Singapore's Defining Challenge"
        subtitle="The Funnel & The Iceberg Effect"
        coreMessage="While heart failure risks are accelerating, 50% of patients are discovered only after their condition has progressed to a critical stage."
        visualizationDesc="Iceberg Model: Undiagnosed potential patients are far larger than diagnosed cases."
        points={{
          doctor: "Screen asymptomatic patients early.",
          management: "Relieve A&E overcrowding and societal costs.",
          clinic: "Specialist-level screening at GP level."
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-around h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={icebergData} innerRadius={60} outerRadius={80} dataKey="value" label />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <div className="text-center md:w-1/3">
            <div className="text-[#C5A059] text-5xl font-bold">50%</div>
            <div className="text-white text-xl">Silent Progressors</div>
          </div>
        </div>
      </Section>

      {/* Slide 2: Workflow - 높이 오류 해결 */}
      <Section 
        id="workflow"
        title="Transforming Workflows"
        subtitle="180 Minutes to 10 Seconds"
        coreMessage="Shorten the waiting time of conventional blood tests to a 10-second AI analysis."
        visualizationDesc="Timeline comparison of conventional process vs AI-ECG."
        points={{
          doctor: "Immediate clinical decisions on-site.",
          management: "Maximize hospital operational efficiency.",
          clinic: "Non-invasive diagnostic results."
        }}
      >
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart layout="vertical" data={workflowData}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="time" radius={[0, 10, 10, 0]}>
                {workflowData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Section>

      {/* Slide 5: Integration - 원본 디자인 복구 */}
      <Section 
        id="integration"
        title="Frictionless Integration"
        subtitle="Zero CapEx, Seamless Workflow"
        coreMessage="Integrates with existing GE/Philips ECG devices with 'two lines of AI analysis' added to reports."
        visualizationDesc="ECG report simulation with AiTiA-LVSD Score."
        points={{
          doctor: "Check results on existing EMR reports.",
          management: "Software updates only, no hardware replacement.",
          clinic: "Cloud or on-premise instant integration."
        }}
      >
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto border border-slate-300">
           <div className="space-y-2 opacity-30">
              <div className="h-2 w-20 bg-slate-400 rounded"></div>
              <div className="h-16 w-full bg-slate-100 rounded border border-dashed border-slate-300"></div>
           </div>
           <div className="mt-4 p-3 border-2 border-red-500 rounded-md bg-red-50">
              <div className="text-[12px] font-bold text-red-700">AI-ECG Analysis Result:</div>
              <div className="text-[14px] font-black text-red-900 uppercase">AiTiA-LVSD Score: 86.2 (High Risk)</div>
              <div className="text-[10px] text-red-600">Left Ventricular Systolic Dysfunction Suspected.</div>
           </div>
        </div>
      </Section>

      {/* Last Page: Roadmap - 디자인 강화 */}
      <section className="bg-slate-900 text-white py-24 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Strategic Partnership <span className="text-[#C5A059]">Roadmap</span></h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3 className="text-xl font-bold text-[#C5A059] mb-4">Phase 1: Rapid Pilot</h3>
            <p className="text-sm text-slate-400">Cloud-based integration for immediate POC and validation.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Phase 2: National Scale</h3>
            <p className="text-sm text-slate-400">Full deployment for public clusters and Healthier SG roll-out.</p>
          </div>
        </div>
        <button className="mt-12 bg-[#C5A059] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
          Book Strategy Session
        </button>
      </section>
    </div>
  );
};

export default App;
