import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang } from '../../i18n';
import { DownloadIcon } from '../UI/Icons';

const LangSwitch: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-bold ${className}`} role="group" aria-label="Language / Lingua">
      {(['en', 'it'] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          lang={code}
          title={code === 'en' ? 'English' : 'Italiano'}
          className={`px-2.5 py-1.5 rounded-md uppercase transition-colors ${
            lang === code ? 'bg-primary text-white' : 'text-slate-500 hover:text-primary'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLang();
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.experience, path: '/resume' },
    { name: t.nav.projects, path: '/portfolio' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-semibold transition-colors ${
      isActive ? 'text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary' : 'text-slate-500 hover:text-primary'
    }`;

  return (
    <nav aria-label="Main" className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Lorenzo Santarelli – Home">
            <span className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-primary/20">
              LS
            </span>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Lorenzo <span className="text-primary">Santarelli</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === '/'} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
            <LangSwitch />
            <a
              href={t.cvFile}
              download
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
            >
              <DownloadIcon className="w-4 h-4" />
              {t.nav.cv}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LangSwitch />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={t.nav.menu}
              className="text-slate-600 hover:text-primary p-2 rounded-lg"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a href={t.cvFile} download className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-bold text-slate-600 hover:bg-slate-50 hover:text-primary">
              <DownloadIcon className="w-4 h-4" />
              {t.home.ctaCv}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
