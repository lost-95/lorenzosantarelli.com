import React, { useState } from 'react';
import Section from '../components/UI/Section';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/UI/Icons';
import { EMAIL, GITHUB, LINKEDIN } from '../content';
import { useLang, usePageTitle } from '../i18n';

// A direct email link: it always works, needs no third-party form service and no API keys.
const Contact: React.FC = () => {
  const { t } = useLang();
  const p = t.contactPage;
  usePageTitle(t.pageTitles.contact);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the address is visible and selectable anyway */
    }
  };

  return (
    <div className="pt-20 fade-in">
      <Section title={p.title} subtitle={p.subtitle} as="h1">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-lg text-center">
          <span className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <MailIcon className="w-7 h-7" />
          </span>
          <p className="text-slate-600 leading-relaxed mb-6">{p.text}</p>
          <p className="text-lg sm:text-2xl font-bold text-slate-900 break-words mb-8 select-all">{EMAIL}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(p.subject)}`}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl btn-shadow transition-colors"
            >
              <MailIcon />
              {p.emailCta}
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:border-primary hover:text-primary font-bold py-4 px-8 rounded-2xl transition-colors"
            >
              <span aria-live="polite">{copied ? p.copied : p.copy}</span>
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">{p.elsewhere}</p>
            <div className="flex justify-center gap-3">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-primary hover:border-primary/30 font-semibold transition-colors">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-slate-900 hover:border-slate-300 font-semibold transition-colors">
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
