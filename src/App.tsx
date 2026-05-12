/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';

import { 
  Apple, 
  Smartphone, 
  Layers, 
  Car, 
  Cloud, 
  Monitor, 
  Home, 
  CreditCard, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Accessibility,
  BookOpen,
  PieChart,
  Target,
  FileCode2,
  Users,
  Eye,
  MousePointer2,
  Type,
  Layout,
  ExternalLink,
  type LucideIcon
} from 'lucide-react';
import { useState, ReactNode } from 'react';

const PRIMARY_COLOR = "#2eade2";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "global-systems",
      label: "Global Design Systems",
      title: "The World's Best Design Systems",
      description: "Analysis of industry leaders defining modern digital experiences across enterprise, fintech, and consumer products.",
      content: (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {[
            { name: "Apple HIG", icon: Apple, color: "bg-gray-50", desc: "Minimal UX, Motion clarity, Ecosystem focus.", text: "font-black text-2xl" },
            { name: "Material 3", icon: Smartphone, color: "bg-blue-50", desc: "Adaptive scaling, Native OS behavior.", custom: (
              <div className='grid grid-cols-2 gap-1 w-8 h-8'>
                <div className='w-4 h-4 bg-red-400 rounded-sm'></div>
                <div className='w-4 h-4 bg-green-400 rounded-sm'></div>
                <div className='w-4 h-4 bg-yellow-400 rounded-sm'></div>
                <div className='w-4 h-4 bg-blue-400 rounded-sm'></div>
              </div>
            )},
            { name: "IBM Carbon", icon: Layers, color: "bg-blue-900", desc: "Layer naming, Document structure.", custom: <div className='w-16 h-4 bg-white/20 rounded-full'></div> },
            { name: "Uber Base", icon: Car, color: "bg-black", desc: "Token management, Reusable foundations.", text: "text-white font-mono font-black text-xl tracking-tighter", label: "Uber" },
            { name: "Salesforce LDS", icon: Cloud, color: "bg-sky-100", desc: "Enterprise SaaS, Workflow consistency.", iconColor: "text-sky-500" },
            { name: "MS Fluent", icon: Monitor, color: "bg-gray-50", desc: "Productivity focus, Cross-platform.", custom: (
               <div className='grid grid-cols-2 gap-1 w-8 h-8 opacity-40'>
                <div className='bg-orange-500 w-full h-full'></div>
                <div className='bg-green-500 w-full h-full'></div>
                <div className='bg-blue-500 w-full h-full'></div>
                <div className='bg-yellow-500 w-full h-full'></div>
              </div>
            )},
            { name: "Airbnb DLS", icon: Home, color: "bg-rose-50", desc: "Human-centered, Conversational UI.", iconColor: "text-rose-500" },
            { name: "CRED", icon: CreditCard, color: "bg-zinc-900", desc: "Premium storytelling, Payment UX.", custom: <div className='w-12 h-6 border-2 border-amber-400 rounded-full'></div> }
          ].map((ds) => (
            <div key={ds.name} className='group relative p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all h-[180px] flex flex-col'>
              <div className={`w-full h-24 rounded-lg ${ds.color} flex items-center justify-center mb-4 overflow-hidden`}>
                {ds.custom ? ds.custom : (
                  ds.label ? <div className={ds.text}>{ds.label}</div> : <ds.icon size={ds.name === "Apple HIG" ? 32 : 40} className={ds.iconColor || "text-gray-900"} />
                )}
              </div>
              <h3 className='font-bold text-sm text-gray-900'>{ds.name}</h3>
              <p className='text-[11px] text-gray-500 mt-1 leading-relaxed'>{ds.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "key-takeaways",
      label: "Key takeways",
      title: "Design System Fundamentals",
      description: "Key principles and distinct methodologies derived from market-leading design languages.",
      content: (
        <div className="space-y-6 pr-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start bg-gray-50 p-8 rounded-3xl border border-gray-100">
             <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">Apple HIG</h4>
                <ul className="space-y-3">
                  {["Clear motion should guide users naturally.", "Minimal interfaces improve focus.", "Strong documentation ensures consistency.", "Every interaction feel smooth and intentional."].map(p => (
                    <li key={p} className="flex gap-3 items-start text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="primary-text mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="w-full lg:w-96 aspect-[16/10] bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 shrink-0">
                <img src="https://images.unsplash.com/photo-1510519133418-2412bbdb56de?auto=format&fit=crop&q=80&w=1200" alt="iOS" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
             </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-start bg-sky-50/50 p-8 rounded-3xl border border-sky-100">
             <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">Material Design 3</h4>
                <ul className="space-y-3">
                  {["Native OS experiences improve usability.", "Adaptive layouts support scalability.", "Consistent components speed development.", "Flexible theming improves brand adaptability."].map(p => (
                    <li key={p} className="flex gap-3 items-start text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-sky-600 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="w-full lg:w-96 aspect-[16/10] bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 shrink-0">
                <img src="https://images.unsplash.com/photo-1616469811116-2fd7499690d5?auto=format&fit=crop&q=80&w=1200" alt="Material" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
             </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
             <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">IBM Carbon Design System</h4>
                <ul className="space-y-3">
                  {["Layer naming improves maintainability.", "Enterprise systems require structured UI.", "Scalability is critical for long-term systems.", "Clear patterns reduce product complexity."].map(p => (
                    <li key={p} className="flex gap-3 items-start text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-blue-600 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="w-full lg:w-96 aspect-[16/10] bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 shrink-0">
                <img src="https://images.unsplash.com/photo-1551288049-bbda38a10ad1?auto=format&fit=crop&q=80&w=1200" alt="IBM Carbon" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
             </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-start bg-gray-900 p-8 rounded-3xl border border-gray-800 text-white">
             <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">Uber Base Design System</h4>
                <ul className="space-y-3">
                  {["Documentation is critical for scaling teams.", "Design tokens create cross-product consistency.", "Measurement improves system adoption.", "Shared foundations reduce duplication."].map(p => (
                    <li key={p} className="flex gap-3 items-start text-sm text-gray-300 font-medium">
                      <CheckCircle2 size={16} className="primary-text mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="w-full lg:w-96 aspect-[16/10] bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden border border-gray-700 shrink-0">
                <img src="https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=1200" alt="Uber Base" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
             </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start bg-sky-100/30 p-8 rounded-3xl border border-sky-200">
             <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">Salesforce Lightning</h4>
                <ul className="space-y-3">
                  {["ERP systems require strong consistency.", "Shared components reduce team duplication.", "Data-heavy products need structured patterns.", "Reusable workflows improve scalability."].map(p => (
                    <li key={p} className="flex gap-3 items-start text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-sky-500 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="w-full lg:w-96 aspect-[16/10] bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 shrink-0">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Salesforce" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
             </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-start bg-rose-50/50 p-8 rounded-3xl border border-rose-100">
             <div className="flex-1">
                <h4 className="text-2xl font-bold mb-4">Airbnb Design Language (DLS)</h4>
                <ul className="space-y-3">
                  {["Human-centered interactions increase engagement.", "Friendly onboarding improves usability.", "Conversational experiences build trust.", "Emotional design creates product connection."].map(p => (
                    <li key={p} className="flex gap-3 items-start text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={16} className="text-rose-500 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="w-full lg:w-96 aspect-[16/10] bg-white rounded-2xl shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 shrink-0">
                <img src="https://images.unsplash.com/photo-1559526324-593bc853bd19?auto=format&fit=crop&q=80&w=1200" alt="Airbnb DLS" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
             </div>
          </div>
        </div>
      )
    },
    {
       id: "governance",
       label: "Design System Governance",
       title: "Component Adoption Without Detach",
       description: "One of the biggest success metrics of a scalable design system is whether designers are using original components without detaching.",
       content: (
          <div className="grid md:grid-cols-2 gap-8 h-full">
            <div className="bg-green-50 p-8 rounded-3xl border border-green-100 flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                   <CheckCircle2 className="text-green-600" size={20} />
                 </div>
                 <h4 className="text-xl font-bold text-green-900">Success: No Detach</h4>
               </div>
               <p className="text-sm text-green-800/80 mb-6 font-medium">When teams continuously use the original components:</p>
               <ul className="space-y-4">
                  {[
                    "Consistency remains strong",
                    "Updates become easier",
                    "Products scale faster",
                    "UI quality stays aligned across teams"
                  ].map(item => (
                    <li key={item} className="flex gap-3 items-center text-sm font-bold text-green-900/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 flex flex-col">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                   <AlertCircle className="text-red-600" size={20} />
                 </div>
                 <h4 className="text-xl font-bold text-red-900">Failure: Component Detached</h4>
               </div>
               <p className="text-sm text-red-800/80 mb-6 font-medium">However, when components are detached:</p>
               <ul className="space-y-4">
                  {[
                    "Design consistency breaks",
                    "Tokens become inconsistent",
                    "System updates no longer sync properly",
                    "Long-term scalability becomes difficult"
                  ].map(item => (
                    <li key={item} className="flex gap-3 items-center text-sm font-bold text-red-900/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
       )
    },
    {
      id: "documentation",
      label: "Zeroheight Documentation",
      title: "Zeroheight Documentation",
      description: "Zeroheight helps teams create a centralized design system documentation platform where designers and developers work from the same source of truth.",
      content: (
        <div className="space-y-8 pr-4">
          <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10">
              <p className="text-gray-400 mb-6 text-lg font-medium leading-relaxed max-w-2xl">
                Instead of scattered Figma files, PDFs, or Notion pages, Zeroheight keeps everything in one scalable system:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {["Components", "Tokens", "Guidelines", "Usage rules", "Documentation", "Best practices"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold tracking-tight">
                    <div className="w-2 h-2 rounded-full primary-bg shadow-sm shadow-sky-400"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm flex flex-col">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
                Uber Base Example
              </h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Uber uses a large-scale documentation approach to manage multiple products and teams globally, ensuring alignment across diverse platforms.
              </p>
              <div className="mt-auto h-48 rounded-2xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=800" 
                  alt="Uber Documentation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-sky-50 shadow-sm flex flex-col">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-900">
                Wise Design System
              </h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Wise focuses heavily on scalable fintech consistency and token-based systems through robust documentation.
              </p>
              
              <div className="space-y-3 mb-8">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400">How Documentation Helps Wise</h5>
                {[
                  "Shared fintech UI standards across products",
                  "Consistent typography and spacing tokens",
                  "Clear usage guidelines for components",
                  "Faster collaboration between design and engineering"
                ].map(item => (
                  <div key={item} className="flex gap-3 items-start text-xs font-bold text-gray-700">
                    <CheckCircle2 size={14} className="primary-text mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto h-40 rounded-2xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-593bc853bd19?auto=format&fit=crop&q=80&w=800" 
                  alt="Wise System" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "accessibility",
      label: "Accessibility",
      title: "WCAG 2.2 Standards",
      description: "Ensuring modern design systems are perceivable, operable, understandable, and robust for all users.",
      content: (
         <div className="grid grid-cols-4 gap-4 h-full">
            {[
              { title: "Perceivable", icon: Eye, color: "text-blue-500" },
              { title: "Operable", icon: MousePointer2, color: "text-green-500" },
              { title: "Understandable", icon: Type, color: "text-orange-500" },
              { title: "Robust", icon: FileCode2, color: "text-purple-500" }
            ].map(p => (
              <div key={p.title} className="p-6 rounded-[2rem] border border-gray-100 bg-white shadow-sm flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  <p.icon size={24} className={p.color} />
                </div>
                <h5 className="font-bold text-sm text-gray-900">{p.title}</h5>
                <div className="mt-3 flex flex-col gap-1">
                   <div className="h-1 w-8 bg-gray-200 rounded-full mx-auto"></div>
                   <div className="h-1 w-4 bg-gray-100 rounded-full mx-auto"></div>
                </div>
              </div>
            ))}
         </div>
      )
    }
  ];

  const current = slides[currentSlide];

  return (
    <div className="flex h-screen w-full bg-white select-none">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-8">
          <h1 className="text-2xl font-black leading-tight text-gray-900 tracking-tighter">Orbit Design<br/>System</h1>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto px-4 space-y-1">
          <div className="px-4 mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-60">Navigation</div>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all text-left ${
                currentSlide === index ? "slide-active text-sky-600 shadow-sm" : "hover:bg-gray-100 text-gray-500 font-medium"
              }`}
            >
              <div className={`text-[11px] font-black w-5 h-5 rounded-md flex items-center justify-center border ${
                currentSlide === index ? "border-sky-200 bg-white" : "border-gray-200 bg-transparent"
              }`}>
                {index + 1}
              </div>
              <span className="text-sm font-bold truncate tracking-tight">{slide.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 border-b border-gray-100 px-10 flex items-center justify-between bg-white z-10 shrink-0">
          <div className="flex items-center gap-4 text-xs font-bold text-gray-400 tracking-wider">
            <span className="text-gray-900">Slide {currentSlide + 1} / {slides.length}</span>
            <span className="opacity-20 text-lg">|</span>
            <span className="uppercase">{current.title}</span>
          </div>
          <div className="flex gap-3">
             <button 
              disabled={currentSlide === 0}
              onClick={() => setCurrentSlide(s => s - 1)}
              className="px-5 py-2.5 text-xs font-black border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-30 disabled:hover:bg-white transition-all active:scale-95"
            >
              PREVIOUS
            </button>
            <button 
              disabled={currentSlide === slides.length - 1}
              onClick={() => setCurrentSlide(s => s + 1)}
              className="px-6 py-2.5 text-xs font-black primary-bg text-white rounded-xl shadow-xl shadow-sky-200 hover:opacity-90 transition-all active:scale-95"
            >
              NEXT SLIDE
            </button>
          </div>
        </header>

        <div className="flex-1 p-12 flex flex-col overflow-y-auto bg-white">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col"
          >
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                {current.label}
              </span>
              <h2 className="text-5xl font-black tracking-tighter text-gray-900 leading-[0.9] mb-4">{current.title}</h2>
              <p className="text-gray-500 mt-2 max-w-2xl text-lg font-medium leading-relaxed">{current.description}</p>
            </div>

            <div className="flex-1">
              {current.content}
            </div>
          </motion.div>
        </div>
        
        {/* Floating background gradient decoration */}
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-sky-50 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 opacity-50 -z-10 pointer-events-none"></div>
      </main>
    </div>
  );
}
