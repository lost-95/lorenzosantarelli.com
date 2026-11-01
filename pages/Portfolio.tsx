import React from 'react';
import Section from '../components/UI/Section';
import { ExternalIcon, GitHubIcon } from '../components/UI/Icons';
import { GITHUB } from '../content';
import { useLang, usePageTitle } from '../i18n';

const Portfolio: React.FC = () => {
  const { t } = useLang();
  const p = t.projectsPage;
  usePageTitle(t.pageTitles.projects);

  return (
    <div className="pt-20 fade-in">
      <Section title={p.title} subtitle={p.subtitle} as="h1">
        <div className="space-y-10 max-w-5xl mx-auto">
          {t.projects.map((project) => (
            <article key={project.id} id={project.id} className="scroll-mt-28 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              {project.image && (
                <img src={project.image} alt="" width={1200} height={400} loading="lazy" className="w-full h-40 md:h-56 object-cover" />
              )}
              <div className="p-6 md:p-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-2">{project.kind}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{project.title}</h2>
                <p className="text-lg text-slate-600 mb-8">{project.summary}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{p.problem}</h3>
                    <p className="text-slate-700 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{p.solution}</h3>
                    <ul className="list-disc list-outside ml-4 text-slate-700 space-y-1.5 leading-relaxed">
                      {project.solution.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{p.result}</h3>
                  <p className="text-slate-800 leading-relaxed">{project.result}</p>
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <ul className="flex flex-wrap gap-2" aria-label="Tools">
                    {project.tools.map((tool) => (
                      <li key={tool} className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                        {tool}
                      </li>
                    ))}
                  </ul>
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, i) =>
                        // plain <a>: /f1-predictor/ is served outside this React app
                        <a
                          key={link.href}
                          href={link.href}
                          {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className={`inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-lg transition-colors ${
                            i === 0 ? 'bg-primary text-white hover:bg-blue-700' : 'border border-slate-200 text-slate-700 hover:border-primary hover:text-primary'
                          }`}
                        >
                          {link.label}
                          {link.external && <ExternalIcon />}
                        </a>
                      )}
                    </div>
                  )}
                </div>
                {project.note && <p className="mt-4 text-sm text-slate-400 italic">{project.note}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto p-8 bg-slate-50 border border-slate-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">{p.githubTitle}</h2>
            <p className="text-slate-600">{p.githubText}</p>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap bg-tech-dark hover:bg-black text-white px-7 py-4 rounded-xl font-bold inline-flex items-center gap-2 transition-colors"
          >
            {p.githubCta}
            <GitHubIcon />
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
