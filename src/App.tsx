
import React, { useState, useEffect } from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell, PieChart, Pie, Legend 
} from 'recharts';

// Types & Data Structures
interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  coreMessage: string;
  visualizationDesc: string;
  points: {
    doctor: string;
    management: string;
    clinic: string;
  };
  children: React.ReactNode;
}

// Components
const Header: React.FC = () => (
  <header className="bg-medical-blue text-white p-4 sticky top-0 z-50 shadow-md">
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

const Section: React.FC<SectionProps> = ({ id, title, subtitle, coreMessage, visualizationDesc, points, children }) => (
  <section id={id} className="min-h-screen py-12 px-4 border-b border-slate-200 scroll-mt-20">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-medical-blue">{title}</h2>
        <p className="text-lg text-slate-500 font-medium">{subtitle}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-bold text-medical-blue uppercase tracking-widest mb-2 flex items-center">
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
        <p className="text-sm italic leading-relaxed bg-slate-800 p-4 rounded-lg border-l-4 border-gold">
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

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('problem');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem', 'workflow', 'clinical', 'financial', 'integration'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Iceberg Data
  const icebergData = [
    { name: 'Symptomatic (Diagnosed)', value: 10, fill: '#C5A059' },
    { name: 'Undiagnosed Potential (Hidden)', value: 50, fill: '#003366' },
    { name: 'Total Risk Pool', value: 40, fill: '#1e293b' },
  ];

  // Workflow Data
  const workflowData = [
    { name: 'Conventional (Blood)', time: 180, color: '#94a3b8' },
    { name: 'AI-ECG Analysis', time: 0.16, color: '#ef4444' },
  ];

  // Clinical Accuracy Data (Asian multi-ethnic)
  const accuracyData = [
    { ethnic: 'Chinese', auroc: 0.919 },
    { ethnic: 'Malay', auroc: 0.912 },
    { ethnic: 'Indian', auroc: 0.908 },
    { ethnic: 'Other', auroc: 0.905 },
  ];

  return (
    <div className="pb-24">
      <Header />

      {/* Hero Section */}
      <section className="bg-medical-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unlocking the Future of <span className="text-gold">Preventive Cardiology</span>
          </h1>
          <p className="text-xl opacity-90 font-light">
            Empowering Healthier SG with AI-Driven Early Cardiac Diagnosis
          </p>
          <div className="pt-8">
             <a 
               href="#problem" 
               onClick={(e) => handleNavClick(e, 'problem')}
               className="bg-gold text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all uppercase tracking-wide inline-block"
             >
               Start Presentation
             </a>
          </div>
        </div>
      </section>

      {/* Slide 1: Problem Definition */}
      <Section 
        id="problem"
        title="Singapore's Defining Challenge"
        subtitle="The Funnel & The Iceberg Effect"
        coreMessage="While heart failure risks are accelerating due to aging and hypertension, 50% of all patients are discovered only after their condition has progressed to a critical stage due to vague early symptoms."
        visualizationDesc="Visualizing the high-risk structure through an Iceberg Model, where the undiagnosed potential patients (50% below the surface) are far larger than the diagnosed cases above the surface."
        points={{
          doctor: "Improve prognosis by early screening of asymptomatic heart failure patients showing non-specific symptoms.",
          management: "Relieve overcrowding in A&E and ICU and prevent massive societal costs by avoiding disease progression.",
          clinic: "Strengthen the role of community healthcare by enabling specialist-level cardiac screening at the GP level."
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">
          <div className="w-full h-64 md:w-1/2">
            <ResponsiveContainer width="100%" height="100%" minHeight={256}>
              <PieChart>
                <Pie 
                  data={icebergData} 
                  innerRadius={60} 
                  outerRadius={80} 
                  paddingAngle={5} 
                  dataKey="value"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="md:w-1/2 text-center space-y-4">
             <div className="text-gold text-5xl font-bold">50%</div>
             <div className="text-xl font-medium">Silent Progressors</div>
             <p className="text-sm opacity-70 italic">"Waiting for symptoms is too late."</p>
          </div>
        </div>
      </Section>

      {/* Slide 2: Workflow Simulation */}
      <Section 
        id="workflow"
        title="Transforming Workflows"
        subtitle="180 Minutes to 10 Seconds"
        coreMessage="Shorten the long waiting time (1-3 hours) of conventional blood tests (NT-proBNP) to an AI analysis within 10 seconds, enabling immediate clinical triage."
        visualizationDesc="A timeline comparison chart placing the conventional blood collection-transportation-analysis process side-by-side with the single-step AI-ECG process."
        points={{
          doctor: "Make immediate clinical decisions on-site without waiting for lab test results.",
          management: "Maximize hospital operational efficiency by reducing lab load and patient stay duration.",
          clinic: "Derive precise diagnostic results using standard ECG alone, without invasive blood sampling."
        }}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-slate-800 rounded-lg">
              <div className="text-xs text-slate-400 uppercase">Conventional Blood Test</div>
              <div className="text-3xl font-bold">1 ~ 3 Hours</div>
            </div>
            <div className="p-4 bg-red-900/30 rounded-lg border border-red-500/50">
              <div className="text-xs text-red-400 uppercase">AI-ECG Analysis</div>
              <div className="text-3xl font-bold text-red-500">10 Seconds</div>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%" minHeight={192}>
              <BarChart layout="vertical" data={workflowData}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" width={100} fontSize={12} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="time" radius={[0, 10, 10, 0]}>
                  {workflowData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Section>

      {/* Slide 3: Clinical Evidence */}
      <Section 
        id="clinical"
        title="Clinical Evidence & Equity"
        subtitle="Unbiased, Universal Reliability"
        coreMessage="Maintains a high accuracy of AUROC 0.905+ even in Singapore's multi-ethnic environment, providing the same diagnostic quality to all patients."
        visualizationDesc="A bar chart showing accuracy figures across ethnic groups (Chinese, Malay, Indian) to prove the absence of demographic bias."
        points={{
          doctor: "Secure consistent high sensitivity regardless of race and age demographics.",
          management: "Realize 'Equity by Design' in healthcare services, aligning with national health policies.",
          clinic: "Increase diagnostic confidence for non-specialists with data-driven accurate scoring (AiTiA Score 0-100)."
        }}
      >
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%" minHeight={256}>
            <BarChart data={accuracyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="ethnic" stroke="#94a3b8" />
              <YAxis domain={[0.8, 1.0]} stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#fff' }} />
              <Bar dataKey="auroc" fill="#C5A059" radius={[5, 5, 0, 0]}>
                <Cell fill="#C5A059" />
                <Cell fill="#003366" />
                <Cell fill="#10b981" />
                <Cell fill="#f43f5e" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center text-xs text-slate-500">AUROC Comparison across Multi-ethnic Data Sets</div>
      </Section>

      {/* Slide 4: Financial Impact */}
      <Section 
        id="financial"
        title="Proactive Financial Strategy"
        subtitle="Cost Avoidance & Reinvestment"
        coreMessage="Save significant budgets every time an unnecessary admission is avoided, reinvesting these savings into preventive services to optimize bed turnover rates."
        visualizationDesc="Citing Mayo Clinic data to compare the cost-effectiveness of heart failure screening ($1,651/QALY) with savings from avoided admissions."
        points={{
          doctor: "Improve medical quality indicators and patient quality of life by lowering re-admission rates.",
          management: "Generate immediate ROI with a Pay-per-use model available without CapEx investment.",
          clinic: "Improve profitability and patient retention within local clinics by reducing unnecessary referrals to tertiary hospitals."
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
           <div className="p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-xl text-center space-y-2">
              <i className="fas fa-hand-holding-dollar text-emerald-400 text-3xl"></i>
              <div className="text-2xl font-bold text-emerald-400">$1,651 / QALY</div>
              <p className="text-xs opacity-70 uppercase">Cost per Quality-Adjusted Life Year</p>
           </div>
           <div className="p-6 bg-slate-800 rounded-xl space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Avoided Admission Savings</span>
                <span className="text-emerald-400 font-bold">High</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Implementation CapEx</span>
                <span className="text-gold font-bold">ZERO</span>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-gold h-full w-[0%]"></div>
              </div>
           </div>
        </div>
      </Section>

      {/* Slide 5: Integration Simulation */}
      <Section 
        id="integration"
        title="Frictionless Integration"
        subtitle="Zero CapEx, Seamless Workflow"
        coreMessage="Seamlessly integrates with existing GE/Philips ECG devices; 'two lines of AI analysis results' added to the bottom of reports provide clinical insights without increasing workflow load."
        visualizationDesc="A simulation of an ECG report example with 'AiTiA-LVSD Score: 86.2 (High Risk)' text inserted as two additional lines."
        points={{
          doctor: "Check results directly on the existing EMR ECG report without needing a separate viewer.",
          management: "Adopt the latest AI technology with software updates only, without replacing existing equipment.",
          clinic: "Instant integration via cloud or on-premise even in small clinics with limited IT infrastructure."
        }}
      >
        <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto overflow-hidden border border-slate-300">
           <div className="space-y-2 opacity-50 select-none">
              <div className="h-2 w-20 bg-slate-200 rounded"></div>
              <div className="h-2 w-32 bg-slate-200 rounded"></div>
              <div className="h-16 w-full bg-slate-100 rounded flex items-center justify-center">
                <span className="text-[10px] text-slate-400">ECG WAVEFORM (GE/PHILIPS)</span>
              </div>
           </div>
           <div className="mt-4 p-3 border-2 border-red-500 rounded-md bg-red-50 animate-pulse">
              <div className="text-[12px] font-bold text-red-700 mb-1">AI-ECG Analysis Result:</div>
              <div className="text-[14px] font-black text-red-900">AiTiA-LVSD Score: 86.2 (High Risk)</div>
              <div className="text-[10px] text-red-600 mt-1">Left Ventricular Systolic Dysfunction Suspected.</div>
           </div>
           <div className="absolute top-0 right-0 p-2 bg-medical-blue text-white text-[8px] font-bold rounded-bl">MEDICAL AI POWERED</div>
        </div>
      </Section>

      {/* Closing Summary Section (Replacing old Source Banner buttons) */}
      <section className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Strategic Partnership <span className="text-gold">Roadmap</span></h2>
            <p className="text-lg opacity-70">Empowering Singapore's Public Health Infrastructure for 2026 and Beyond.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-rocket text-gold text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Phase 1: Rapid Pilot</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i> Cloud-based integration for immediate POC</li>
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i> Real-world data validation with multi-ethnic cohorts</li>
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i> Clinician feedback loop for UI/UX optimization</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fas fa-expand-arrows-alt text-blue-400 text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Phase 2: National Scale</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i> Full on-premise deployment for public clusters</li>
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i> EMR automation with GE/Philips native output</li>
                <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-2"></i> Healthier SG preventive screening roll-out</li>
              </ul>
            </div>
          </div>

          <div className="bg-medical-blue p-8 rounded-2xl border border-blue-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h4 className="text-2xl font-bold">Ready to Elevate Care?</h4>
              <p className="text-blue-200 text-sm">Schedule a deep-dive technical session with our Singapore team.</p>
            </div>
            <button className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-xl font-bold text-lg whitespace-nowrap shadow-xl transition-all active:scale-95">
              Book Strategy Session
            </button>
          </div>
        </div>
      </section>

      {/* Persistent Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl z-50 safe-area-inset md:px-4">
        <div className="max-w-4xl mx-auto flex justify-around items-center p-2 h-16">
          <a 
            href="#problem" 
            onClick={(e) => handleNavClick(e, 'problem')} 
            className={`flex flex-col items-center justify-center w-full transition-colors ${activeTab === 'problem' ? 'text-medical-blue' : 'text-slate-400'}`}
          >
            <i className="fas fa-mountain text-lg"></i>
            <span className="text-[10px] mt-1 font-bold">Challenge</span>
          </a>
          <a 
            href="#workflow" 
            onClick={(e) => handleNavClick(e, 'workflow')} 
            className={`flex flex-col items-center justify-center w-full transition-colors ${activeTab === 'workflow' ? 'text-medical-blue' : 'text-slate-400'}`}
          >
            <i className="fas fa-clock text-lg"></i>
            <span className="text-[10px] mt-1 font-bold">Workflow</span>
          </a>
          <a 
            href="#clinical" 
            onClick={(e) => handleNavClick(e, 'clinical')} 
            className={`flex flex-col items-center justify-center w-full transition-colors ${activeTab === 'clinical' ? 'text-medical-blue' : 'text-slate-400'}`}
          >
            <i className="fas fa-microscope text-lg"></i>
            <span className="text-[10px] mt-1 font-bold">Evidence</span>
          </a>
          <a 
            href="#financial" 
            onClick={(e) => handleNavClick(e, 'financial')} 
            className={`flex flex-col items-center justify-center w-full transition-colors ${activeTab === 'financial' ? 'text-medical-blue' : 'text-slate-400'}`}
          >
            <i className="fas fa-coins text-lg"></i>
            <span className="text-[10px] mt-1 font-bold">ROI</span>
          </a>
          <a 
            href="#integration" 
            onClick={(e) => handleNavClick(e, 'integration')} 
            className={`flex flex-col items-center justify-center w-full transition-colors ${activeTab === 'integration' ? 'text-medical-blue' : 'text-slate-400'}`}
          >
            <i className="fas fa-plug text-lg"></i>
            <span className="text-[10px] mt-1 font-bold">Connect</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default App;
