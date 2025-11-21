import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Calculator, 
  Users, 
  CheckCircle2, 
  Globe, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X,
  BarChart3,
  Phone,
  Mail,
  Briefcase,
  Zap,
  Mountain,
  Rocket,
  AlertCircle,
  Check,
  MapPin,
  Target,
  Star,
  LayoutGrid,
  ClipboardList,
  UserCheck,
  Plug,
  LineChart,
  Filter,
  FileText,
  Lock
} from 'lucide-react';

// --- INTERNAL LOGO COMPONENT ---
const MaxApeLogo = ({ className = "w-16 h-16" }) => (
  <img 
    src="/maxlogo1.png" 
    alt="MaxApe Solutions" 
    className={`${className} object-contain`} 
  />
);

// --- REUSABLE UI COMPONENTS ---

const SectionBadge = ({ icon: Icon, text, color = "orange" }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${color}-500/10 border border-${color}-500/20 text-${color}-600 font-bold text-xs uppercase tracking-widest mb-6`}>
    {Icon && <Icon size={14} />}
    <span>{text}</span>
  </div>
);

const StatCard = ({ value, label, subtext }) => (
  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition duration-300">
    <div className="text-4xl md:text-5xl font-black text-white mb-2">{value}</div>
    <div className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-1">{label}</div>
    <div className="text-slate-400 text-xs">{subtext}</div>
  </div>
);

// --- PAGE SECTIONS ---

const Hero = ({ navigate }) => (
  <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="mb-8 flex justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wide animate-fade-in-up">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Accepting New Partners for 2026
        </div>
      </div>

      <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9] md:leading-[0.9]">
        CLIMB <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">HIGHER.</span> <br className="hidden md:block" />
        BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">BIGGER.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
        Stop playing small with freelancers. We build <strong>autonomous, nearshore engines</strong> for Finance, Sales, and Ops. <span className="text-slate-900 font-bold">Zero chaotic management. 100% Ace talent.</span>
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button onClick={() => navigate('contact')} className="bg-slate-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-2xl hover:shadow-orange-500/20 flex items-center justify-center gap-3 group">
          Start Your Engine <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
        </button>
        <button onClick={() => navigate('services')} className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-xl font-bold text-lg hover:border-slate-900 transition flex items-center justify-center gap-2">
          See The Blueprint
        </button>
      </div>

      <div className="mt-20 pt-10 border-t border-slate-100">
        <p className="text-sm text-slate-600 font-bold uppercase tracking-widest mb-6">Powering Growth For</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition duration-500">
           {['TechFlow', 'ScaleUp Inc.', 'VentureBase', 'Apex Finance', 'Growth Labs'].map(name => (
             <span key={name} className="text-xl md:text-2xl font-black text-slate-400">{name}</span>
           ))}
        </div>
      </div>
    </div>
  </section>
);

const Metrics = () => (
  <section className="py-20 bg-slate-950 border-y border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-1 text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-3xl font-black text-white mb-4 leading-tight">REAL <br/> <span className="text-orange-500">IMPACT.</span></h3>
          <p className="text-slate-400 text-sm">Our partners don't just save money; they accelerate execution.</p>
        </div>
        <StatCard value="55%" label="Cost Reduction" subtext="Vs. hiring US-based equivalents" />
        <StatCard value="< 2h" label="Response Time" subtext="Real-time collaboration in CST" />
        <StatCard value="100%" label="Compliance" subtext="Zero liability for your company" />
      </div>
    </div>
  </section>
);

// Modified ServicesGrid to accept custom padding
const ServicesGrid = ({ padding = "py-32" }) => (
  <section className={`${padding} bg-white`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <SectionBadge icon={LayoutGrid} text="Modular Architecture" color="blue" />
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">CHOOSE YOUR ENGINE</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Specialized Independent Business Units (IBUs) designed to plug directly into your workflow.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Finance Card */}
        <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-500 w-20 h-20 rounded-bl-full -mr-10 -mt-10 opacity-20 group-hover:opacity-100 transition"></div>
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm border border-slate-100">
            <Calculator size={28} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Financial Hub</h3>
          <p className="text-slate-500 mb-8 h-12">Stop flying blind. Get audit-ready financials and clear cash flow.</p>
          <ul className="space-y-3 text-sm font-bold text-slate-700 mb-8">
            <li className="flex gap-3"><Check size={18} className="text-blue-500"/> GAAP Bookkeeping</li>
            <li className="flex gap-3"><Check size={18} className="text-blue-500"/> AP/AR Management</li>
            <li className="flex gap-3"><Check size={18} className="text-blue-500"/> Fractional Controller</li>
          </ul>
        </div>

        {/* Sales Card */}
        <div className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition duration-300 relative overflow-hidden transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-orange-500 w-20 h-20 rounded-bl-full -mr-10 -mt-10 opacity-100 transition"></div>
          <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-orange-500 mb-8 shadow-lg border border-slate-700">
            <Rocket size={28} />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Growth Engine</h3>
          <p className="text-slate-400 mb-8 h-12">Stop relying on referrals. Build a predictable pipeline.</p>
          <ul className="space-y-3 text-sm font-bold text-slate-300 mb-8">
            <li className="flex gap-3"><Check size={18} className="text-orange-500"/> Dedicated SDRs</li>
            <li className="flex gap-3"><Check size={18} className="text-orange-500"/> Cold Outreach (Email/Call)</li>
            <li className="flex gap-3"><Check size={18} className="text-orange-500"/> Lead Qualification</li>
          </ul>
        </div>

        {/* Admin Card */}
        <div className="group bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10 transition duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-purple-500 w-20 h-20 rounded-bl-full -mr-10 -mt-10 opacity-20 group-hover:opacity-100 transition"></div>
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-purple-600 mb-8 shadow-sm border border-slate-100">
            <Users size={28} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">Support Core</h3>
          <p className="text-slate-500 mb-8 h-12">Stop drowning in busywork. Focus on strategy.</p>
          <ul className="space-y-3 text-sm font-bold text-slate-700 mb-8">
            <li className="flex gap-3"><Check size={18} className="text-purple-500"/> Executive Assistance</li>
            <li className="flex gap-3"><Check size={18} className="text-purple-500"/> Complex Scheduling</li>
            <li className="flex gap-3"><Check size={18} className="text-purple-500"/> Operational Ops</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactCTA = ({ navigate }) => (
  <section className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-600/20 to-blue-900/20"></div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
        READY TO <span className="text-orange-500">SCALE?</span>
      </h2>
      <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
        Schedule a 30-minute <strong>Operational Audit</strong>. No sales fluff. We diagnose your bottlenecks and blueprint your custom team.
      </p>
      <div className="flex justify-center">
        <button onClick={() => navigate('contact')} className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-blue-500 hover:scale-105 transition shadow-2xl shadow-blue-600/30 flex items-center gap-3">
          Book My Audit <ArrowRight size={24} />
        </button>
      </div>
      <div className="mt-8 flex justify-center gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
        <span className="flex items-center gap-2"><ShieldCheck size={16}/> No Gatekeepers</span>
        <span className="flex items-center gap-2"><Zap size={16}/> Direct Access</span>
      </div>
    </div>
  </section>
);

// --- NEW LEGAL PAGES ---

const PrivacyPage = () => (
  <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-200">
        <div className="mb-10 flex items-center gap-4 text-slate-400">
          <Lock size={24} />
          <h1 className="text-4xl font-black text-slate-900">Privacy Policy</h1>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="text-sm text-slate-400 mb-8">Last Updated: November 2025</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h3>
          <p>MaxApe Solutions LLC ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our services.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Data We Collect</h3>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data (name), Contact Data (email, phone), and Technical Data (IP address, browser info).</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Data</h3>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, or where it is necessary for our legitimate interests.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h3>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way. We operate under a Zero-Trust architecture for client data.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h3>
          <p>If you have any questions about this privacy policy, please contact us at: Operations@MaxApeSolutions.com</p>
        </div>
      </div>
    </div>
  </section>
);

const TermsPage = () => (
  <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-200">
        <div className="mb-10 flex items-center gap-4 text-slate-400">
          <FileText size={24} />
          <h1 className="text-4xl font-black text-slate-900">Terms of Service</h1>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="text-sm text-slate-400 mb-8">Last Updated: November 2025</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h3>
          <p>By accessing our website or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access the service.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Services</h3>
          <p>MaxApe Solutions LLC provides Business Process Outsourcing (BPO) services including but not limited to Financial Management, Sales Development, and Administrative Support. Specific deliverables are outlined in individual client service agreements.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Intellectual Property</h3>
          <p>The service and its original content, features, and functionality are and will remain the exclusive property of MaxApe Solutions LLC and its licensors.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Limitation of Liability</h3>
          <p>In no event shall MaxApe Solutions LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Governing Law</h3>
          <p>These Terms shall be governed and construed in accordance with the laws of Wyoming, United States, without regard to its conflict of law provisions.</p>
        </div>
      </div>
    </div>
  </section>
);

// --- LAYOUT SHELL ---

const Navbar = ({ navigate, isMenuOpen, toggleMenu }) => (
  <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('home')}>
          <div className="transform group-hover:rotate-12 transition duration-300">
             <MaxApeLogo className="h-10 w-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">MAXAPE</span>
            <span className="font-bold text-[10px] tracking-[0.2em] text-orange-600 uppercase">Solutions</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'Philosophy', 'Crew'].map((item) => (
            <button 
              key={item}
              onClick={() => navigate(item.toLowerCase())} 
              className="font-bold text-sm text-slate-600 hover:text-slate-900 transition uppercase tracking-wide"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => navigate('contact')}
            className="bg-slate-900 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition shadow-lg uppercase tracking-wider transform hover:-translate-y-0.5"
          >
            Start Mission
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-900 p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>
    
    {/* Mobile Nav */}
    {isMenuOpen && (
      <div className="md:hidden bg-white border-b border-slate-100 absolute w-full h-screen z-40 p-6">
        <div className="space-y-4 flex flex-col">
          {['Home', 'Services', 'Philosophy', 'Crew', 'Contact'].map((item) => (
            <button 
              key={item}
              onClick={() => { navigate(item.toLowerCase()); toggleMenu(); }}
              className="text-3xl font-black text-slate-900 text-left hover:text-orange-500 transition"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

const Footer = ({ navigate }) => (
  <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <MaxApeLogo className="h-8 w-8" />
            <span className="font-black text-xl text-slate-900 tracking-tight">MAXAPE.</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
            <strong>Headquarters:</strong> Cheyenne, WY<br/>
            <strong>Operational Heads:</strong> Managua, Nicaragua<br/>
            <strong>Talent:</strong> Latin America<br/>
            <strong>Mission:</strong> Building the world's best nearshore engines.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition cursor-pointer"><Globe size={18}/></div>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-orange-500 hover:text-white transition cursor-pointer"><Mail size={18}/></div>
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Engines</h4>
          <ul className="space-y-3 text-sm font-medium text-slate-500">
            <li onClick={() => navigate('services')} className="hover:text-orange-600 cursor-pointer transition">Financial Hub (AP/AR)</li>
            <li onClick={() => navigate('services')} className="hover:text-orange-600 cursor-pointer transition">Growth Engine (Sales)</li>
            <li onClick={() => navigate('services')} className="hover:text-orange-600 cursor-pointer transition">Support Core (Admin)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Connect</h4>
          <ul className="space-y-3 text-sm font-medium text-slate-500">
            <li onClick={() => navigate('contact')} className="hover:text-orange-600 cursor-pointer transition flex items-center gap-2"><Mail size={14}/> Email Us</li>
            <li onClick={() => navigate('careers')} className="hover:text-orange-600 cursor-pointer transition flex items-center gap-2"><Briefcase size={14}/> Careers</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
        <p>&copy; 2026 MAXAPE SOLUTIONS LLC.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          {/* UPDATED: Now these work */}
          <span onClick={() => navigate('privacy')} className="hover:text-slate-900 cursor-pointer transition">Privacy Policy</span>
          <span onClick={() => navigate('terms')} className="hover:text-slate-900 cursor-pointer transition">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- SUB-PAGES ---

const Workflow = () => {
  const steps = [
    { icon: Briefcase, title: "Audit & Blueprint", desc: "We analyze your stack and design your custom team structure." },
    { icon: Users, title: "Talent Deployment", desc: "We handpick top 1% talent matched to your culture and time zone." },
    { icon: Zap, title: "Integration", desc: "We plug directly into your slack, CRM, and ERP. Zero friction." },
    { icon: Rocket, title: "Launch & Scale", desc: "Your engine goes live. We manage performance and optimization." }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge icon={TrendingUp} text="The Flight Plan" color="blue" />
          <h2 className="text-4xl font-black text-slate-900 mb-4">HOW WE BUILD YOUR ENGINE</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">From diagnosis to deployment in 4 streamlined steps.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center mb-6 shadow-lg group-hover:border-blue-500 transition duration-300 relative z-10">
                <step.icon size={32} className="text-slate-700 group-hover:text-blue-600 transition" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Deliverables = () => {
  const items = [
    "Dedicated Top 1% Talent (Not Shared)",
    "Dedicated Account Manager (Your Copilot)",
    "Standardized Playbooks (SOPs)",
    "Weekly KPI & Performance Reports",
    "Zero-Liability Compliance & HR",
    "Real-Time Slack/Teams Integration",
    "Full Tech Stack Setup (VoIP/CRM)",
    "Quarterly Strategy Reviews"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge icon={Star} text="The Payload" color="orange" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">WHAT YOU GET <br/><span className="text-slate-500">IN THE BOX</span></h2>
            <p className="text-slate-300 text-lg mb-8">
              We don't just give you people. We give you a fully managed infrastructure. Everything you need to scale without the headache.
            </p>
            <div className="p-6 bg-slate-800/50 rounded-xl border-l-4 border-orange-500">
              <p className="font-bold text-orange-400 mb-1">The MaxApe Guarantee</p>
              <p className="text-sm text-slate-400">If a placement isn't a fit in the first 30 days, we replace them at no cost. No questions asked.</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = ({ navigate }) => (
  <div className="pt-32 pb-0">
    <div className="max-w-7xl mx-auto px-4 text-center mb-10"> {/* Reduced margin-bottom here to fix spacing */}
      <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">INTEGRATED NEARSHORE TEAMS</div>
      <h2 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
          STOP MANAGING FREELANCERS. <br/>
          <span className="text-blue-600">START BUILDING AN ENGINE.</span>
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          MaxApe Solutions is not a freelance marketplace. We are a premium BPO partner that builds autonomous, managed units for your business.
      </p>
    </div>
    
    <ServicesGrid padding="py-16" /> {/* Adjusted padding prop for Services Page */}
    
    <Workflow />
    <Deliverables />
    
    <Comparison />
    <ContactCTA navigate={navigate} />
  </div>
);

const ContentPage = ({ title, subtitle }) => (
  <div className="pt-40 pb-20 min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase">{title}</h2>
    <p className="text-xl text-slate-600 max-w-2xl">{subtitle}</p>
  </div>
);

const ContactFormPage = () => (
  <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="max-w-3xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-slate-900 p-10 text-center">
          <h2 className="text-3xl font-black text-white mb-2">SECURE YOUR AUDIT</h2>
          <p className="text-slate-400">Fill this out. We'll be in touch within 2 hours (during CST).</p>
        </div>
        <div className="p-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none font-bold text-slate-900" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none font-bold text-slate-900" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Work Email</label>
              <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none font-bold text-slate-900" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Primary Need</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none font-bold text-slate-900">
                <option>Sales Development (Growth)</option>
                <option>Financial Management (AP/AR)</option>
                <option>Operations & Admin</option>
              </select>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl text-lg transition shadow-xl uppercase tracking-widest">
              Confirm Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
    <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <SectionBadge icon={Target} text="Our Philosophy" color="blue" />
                <h2 className="text-5xl font-black text-slate-900 mb-6">THE "ACE" STORY</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">We were born because traditional BPO was too slow and bureaucratic for the modern world. MaxApe is agile evolution.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                <div className="flex justify-center">
                    <MaxApeLogo className="w-64 h-64 drop-shadow-2xl hover:scale-105 transition duration-500" />
                </div>
                <div className="space-y-8">
                     <div>
                        <h3 className="text-3xl font-black text-slate-900 mb-4">CLIMB HIGHER <span className="text-orange-500">FOR BIGGER BUSINESS</span></h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            This isn't just a slogan. It's the core of our operational DNA. 
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            <strong>"Climb Higher"</strong> represents our relentless pursuit of the top 1% of talent. We don't settle for average; we look for the ACEs who want to ascend in their careers.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            <strong>"Bigger Business"</strong> is the promise we make to you. By removing the friction of daily operations, we give you the altitude you need to see the bigger picture and scale your revenue.
                        </p>
                     </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                     <div className="bg-orange-50 p-8 rounded-3xl border-l-8 border-orange-500">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">No Fear of Failure</h3>
                        <p className="text-slate-700">We adopt the 'Fail Fast, Learn Faster' mindset. We aren't just task executors; we are proactive problem solvers.</p>
                     </div>
                     <div className="bg-blue-50 p-8 rounded-3xl border-l-8 border-blue-500">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Your Business Pilot</h3>
                        <p className="text-slate-700">Like the aviator chimp, our eyes are on the horizon. We scale with you, adapting our technology and processes to your speed.</p>
                     </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                        <h4 className="text-2xl font-bold mb-6">Our Manifesto</h4>
                        <ul className="space-y-4 font-medium text-lg">
                            <li className="flex gap-3"><Zap className="text-yellow-400"/> Speed over Bureaucracy</li>
                            <li className="flex gap-3"><Target className="text-red-400"/> Results over Hours Sat</li>
                            <li className="flex gap-3"><ShieldCheck className="text-green-400"/> Zero-Trust Security</li>
                            <li className="flex gap-3"><Rocket className="text-blue-400"/> Always Scaling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- CAREERS PAGE ---
const CareersPage = () => {
  const OPEN_POSITIONS = [
    {
      id: 1,
      title: "Senior Sales Development Rep (SDR)",
      dept: "Sales",
      type: "Full-Time",
      location: "Remote (LATAM)",
      desc: "We need a hunter. You will be responsible for cold outreach, qualifying leads, and setting appointments for our US clients. Must have C1 English and thick skin."
    },
    {
      id: 2,
      title: "Full-Cycle Accountant (US GAAP)",
      dept: "Finance",
      type: "Full-Time",
      location: "Remote (LATAM)",
      desc: "Manage AP/AR, reconciliations, and month-end close for fast-growing startups. QuickBooks Online or Xero experience required. CPA preferred."
    },
    {
      id: 3,
      title: "Executive Assistant",
      dept: "Admin",
      type: "Full-Time",
      location: "Remote (LATAM)",
      desc: "Support C-level executives with complex calendar management, travel, and operational tasks. Proactivity and flawless English are non-negotiable."
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl mb-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                <div className="relative z-10">
                    <div className="mb-8 flex justify-center">
                        <MaxApeLogo className="w-32 h-32 drop-shadow-xl" />
                    </div>
                    <SectionBadge icon={Rocket} text="We Are Hiring" color="orange" />
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">JOIN THE <span className="text-orange-500">CREW</span></h2>
                    <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                        We don't look for employees. We look for pilots. 
                        <br/><br/>
                        <span className="text-white font-bold text-2xl">Are you an ACE? We are hiring top 1% talent in LATAM.</span>
                    </p>
                </div>
             </div>

             <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h3 className="text-3xl font-black text-slate-900">OPEN POSITIONS</h3>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase">Finance</span>
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase">Sales</span>
                        <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase">Admin</span>
                    </div>
                </div>

                <div className="space-y-6">
                    {OPEN_POSITIONS.map((job) => (
                        <div key={job.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-500 transition duration-300 group">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-xs font-black uppercase tracking-widest ${job.dept === 'Sales' ? 'text-orange-500' : job.dept === 'Finance' ? 'text-blue-500' : 'text-purple-500'}`}>
                                            {job.dept}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span className="text-xs font-bold text-slate-400 uppercase">{job.location}</span>
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition">{job.title}</h4>
                                    <p className="text-slate-600 mb-4 max-w-2xl leading-relaxed">{job.desc}</p>
                                    <div className="flex gap-4 text-sm font-bold text-slate-500">
                                        <span className="flex items-center gap-1"><Clock size={16}/> {job.type}</span>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <a href={`mailto:careers@maxapesolutions.com?subject=Application for ${job.title}`} className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition shadow-lg">
                                        Apply Now <ArrowRight size={18}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center bg-blue-50 rounded-2xl p-10 border border-blue-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Don't see your role?</h4>
                    <p className="text-slate-600 mb-6">We are always looking for exceptional talent. Send us your CV anyway.</p>
                    <a href="mailto:careers@maxapesolutions.com" className="text-blue-600 font-black hover:underline">Email General Application &rarr;</a>
                </div>
             </div>
        </div>
    </section>
  );
};

// --- MAIN APP ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans text-slate-800 antialiased bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar navigate={navigate} isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero navigate={navigate} />
            <Metrics />
            <ServicesGrid />
            <ContactCTA navigate={navigate} />
          </>
        )}
        {currentPage === 'services' && <ServicesPage navigate={navigate} />}
        {currentPage === 'contact' && <ContactFormPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'careers' && <CareersPage />}
        {currentPage === 'crew' && <CareersPage />}
        {currentPage === 'philosophy' && <AboutPage />}
        
        {/* Legal Pages Routes */}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'terms' && <TermsPage />}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
};

export default App;