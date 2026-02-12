
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/UI/Section';
import { SKILLS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="fade-in bg-soft-glow">
      {/* Hero Section - Updated with enhanced animation */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Available for Remote / Hybrid EU</span>
              </div>

              {/* Main Heading */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-300 tracking-tight mb-3">
                  Data Analyst
                </h2>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-6">
                  Lorenzo <br /> Santarelli
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
                Turning enterprise data into actionable insights through SQL, Python, and Machine Learning. <span className="text-slate-900">I provide data-driven solutions.</span>
              </p>

              {/* Action Buttons Group */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link 
                  to="/portfolio" 
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl btn-shadow transition-all group flex items-center gap-2"
                >
                  Explore Work
                </Link>
                <a 
                  href="/cv-lorenzo-santarelli.pdf" 
                  download="Lorenzo_Santarelli_CV.pdf"
                  className="bg-slate-900 hover:bg-black text-white font-bold py-4 px-10 rounded-2xl transition-all flex items-center gap-3 shadow-lg shadow-slate-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
                
                {/* Social Icons Integrated */}
                <div className="flex items-center gap-3 mt-2 sm:mt-0">
                  <a href="https://www.linkedin.com/in/lorenzo-santarelli/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-primary hover:border-primary/20 transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://github.com/lost-95" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Photo - Advanced Animation Wrapper */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] md:max-w-[420px] group">
                {/* 
                   Animation Logic:
                   - Starts at scale-100
                   - On hover: Scale up slightly, lift up (-translate-y-4), and rotate slightly (rotate-2)
                   - Transition is a long 700ms ease for a "floaty" cinematic feel.
                */}
                <div className="aspect-[2/3] md:aspect-[3/4.5] bg-white rounded-[4rem] overflow-hidden shadow-[0_30px_60px_rgba(37,99,235,0.08)] border-[6px] border-white relative transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:-translate-y-6 group-hover:rotate-2 group-hover:shadow-[0_60px_100px_rgba(37,99,235,0.15)]">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" 
                    alt="Lorenzo Santarelli Profile"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Glare Effect: A radial gradient that only appears on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
                  
                  {/* Subtle color grading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Decorative background blurs that follow the hover motion subtly */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                <div className="absolute -top-10 -left-10 w-28 h-28 bg-accent/5 rounded-full blur-[60px] -z-10 transition-transform duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Human Description Section: "Behind the Data" */}
      <Section className="bg-white" title="Behind the Data" subtitle="Bridging the gap between code and clarity.">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
            <p>
              My path into data wasn't just about learning SQL or Python—it was about a deep-seated curiosity for how <strong>complex systems</strong> operate. Starting as a Computer Science student, I quickly realized that while building software is powerful, the real "magic" happens when you can make that software <em>speak</em> through its data.
            </p>
            <p>
              I specialize in simplifying the noise. Whether it's optimizing ERP queries at <span className="text-slate-900 font-bold">SYS-DAT Group</span> or building predictive models, my goal is always to deliver actionable strategy. I translate technical complexity into business growth.
            </p>
            <p>
              When I'm not digging into datasets, I'm exploring the latest in AI productivity and digital infrastructure. I believe every dataset tells a story, and I am here to ensure that story drives results for your business.
            </p>
          </div>
          <div className="mt-12 flex justify-center lg:justify-start">
             <Link to="/contact" className="text-primary font-bold flex items-center gap-2 hover:underline transition-all">
               Let's solve your next data challenge
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
             </Link>
          </div>
        </div>
      </Section>

      {/* Technical Stack */}
      <Section title="Technical Stack" subtitle="Modern tools for high-performance enterprise analytics." dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 font-bold">
                {skillGroup.category.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-6">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map(skill => (
                  <li key={skill} className="text-slate-500 flex items-center gap-2 font-medium text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
