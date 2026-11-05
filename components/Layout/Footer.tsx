import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n';
import { EMAIL, GITHUB, LINKEDIN } from '../../content';

const Footer: React.FC = () => {
  const { t } = useLang();
  return (
    <footer className="bg-white border-t border-slate-100 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white text-sm font-bold">LS</span>
              <p className="text-lg font-bold text-slate-900">Lorenzo Santarelli</p>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">{t.footer.tagline}</p>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">{t.footer.explore}</h2>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/resume" className="hover:text-primary transition-colors">{t.nav.experience}</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">{t.nav.projects}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">{t.footer.connect}</h2>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li><a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">Email</a></li>
              <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-400 font-semibold uppercase tracking-[0.15em]">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
