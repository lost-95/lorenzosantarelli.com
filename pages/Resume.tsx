import React from 'react';
import Section from '../components/UI/Section';
import { DownloadIcon, ExternalIcon, MailIcon } from '../components/UI/Icons';
import { CV_EN, CV_IT, EMAIL, PHONE } from '../content';
import { useLang, usePageTitle } from '../i18n';

const Resume: React.FC = () => {
  const { t } = useLang();
  const p = t.experiencePage;
  usePageTitle(t.pageTitles.experience);

  return (
    <div className="pt-20 fade-in">
      <Section title={p.title} subtitle={p.subtitle} as="h1">
        {/* Contact + downloads */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14 p-6 md:p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div>
            <p className="text-2xl font-bold text-slate-900 mb-2">Lorenzo Santarelli</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-primary">
                <MailIcon className="w-4 h-4" />
                {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-primary">{PHONE}</a>
              <span>{t.location}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={CV_EN} download className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl transition-colors shadow-lg shadow-primary/20 whitespace-nowrap">
              <DownloadIcon />
              {p.downloadEn}
            </a>
            <a href={CV_IT} download className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-3 px-6 rounded-2xl transition-colors whitespace-nowrap">
              <DownloadIcon />
              {p.downloadIt}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-8 border-b-2 border-primary w-fit pb-2">{p.experience}</h2>
              <ol className="space-y-12 border-l-2 border-slate-100 ml-2">
                {t.experience.map((job, i) => (
                  <li key={job.company} className="relative pl-8">
                    <span className={`absolute left-[-9px] top-1 w-4 h-4 rounded-full border-4 border-white ${i === 0 ? 'bg-primary' : 'bg-primary/50'}`} aria-hidden="true" />
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{job.dates}</p>
                    <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                    <p className="text-slate-500 font-semibold mb-3">
                      {job.company}
                      {job.place && <span className="font-medium text-slate-400"> · {job.place}</span>}
                      {job.link && (
                        <>
                          {' · '}
                          <a href={job.link.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                            {job.link.label}
                            <ExternalIcon />
                          </a>
                        </>
                      )}
                    </p>
                    {job.intro && <p className="text-slate-600 italic mb-3">{job.intro}</p>}
                    <ul className="list-disc list-outside ml-4 text-slate-600 space-y-2 leading-relaxed">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <ul className="flex flex-wrap gap-2 mt-4" aria-label="Tools">
                      {job.tags.map((tag) => (
                        <li key={tag} className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">{p.education}</h2>
              <ul className="space-y-5">
                {t.education.map((e) => (
                  <li key={e.title}>
                    <h3 className="text-lg font-bold text-slate-900">{e.title}</h3>
                    <p className="text-slate-500">
                      {e.school}
                      {e.dates && ` · ${e.dates}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-tech-dark p-7 rounded-3xl text-white shadow-xl">
              <h2 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">{p.skills}</h2>
              <div className="space-y-6">
                {t.skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-[11px] font-black uppercase tracking-widest text-blue-300 mb-3">{group.category}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <li key={s} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="text-xl font-bold mt-10 mb-6 border-b border-white/20 pb-4">{p.certifications}</h2>
              <ul className="space-y-4">
                {t.certifications.map((c) => (
                  <li key={c.name}>
                    <p className="font-bold text-sm">{c.name}</p>
                    <p className="text-xs text-white/60">{c.issuer}</p>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mt-10 mb-6 border-b border-white/20 pb-4">{p.languages}</h2>
              <ul className="space-y-2 text-sm">
                {t.languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
};

export default Resume;
