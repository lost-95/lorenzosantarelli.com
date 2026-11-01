import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/UI/Section';
import SkillGrid from '../components/UI/SkillGrid';
import ProjectCard from '../components/Portfolio/ProjectCard';
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from '../components/UI/Icons';
import { GITHUB, LINKEDIN } from '../content';
import { useLang, usePageTitle } from '../i18n';

const FEATURED = ['f1-predictor', 'nexux-lead-automation', 'barcode-decoder'];

const Home: React.FC = () => {
  const { t } = useLang();
  usePageTitle(t.pageTitles.home);
  const featured = FEATURED.map((id) => t.projects.find((p) => p.id === id)).filter((p) => p !== undefined);
  const moreLabel = t.home.readMore;

  return (
    <div className="fade-in bg-soft-glow">
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -z-10" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-7">
                <span className="flex h-2 w-2 rounded-full bg-[#10B981]" aria-hidden="true" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em]">{t.home.badge}</span>
              </p>

              <p className="text-lg sm:text-xl md:text-2xl font-bold text-gradient tracking-tight mb-3">
                {t.title.split(' | ').map((part, i) => (
                  <React.Fragment key={part}>
                    {i > 0 && ' | '}
                    <span className="whitespace-nowrap">{part}</span>
                  </React.Fragment>
                ))}
              </p>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-7">
                Lorenzo <br className="hidden sm:block" />
                Santarelli
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">{t.home.intro}</p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link to="/portfolio" className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl btn-shadow transition-colors">
                  {t.home.ctaProjects}
                </Link>
                <a
                  href={t.cvFile}
                  download
                  className="bg-slate-900 hover:bg-black text-white font-bold py-4 px-8 rounded-2xl transition-colors inline-flex items-center gap-3 shadow-lg shadow-slate-200"
                >
                  <DownloadIcon />
                  {t.home.ctaCv}
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-primary hover:border-primary/30 transition-colors shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm"
                    aria-label="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[190px] sm:max-w-[300px] md:max-w-[400px]">
                <div className="aspect-[4/5] sm:aspect-[2/3] bg-white rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_rgba(37,99,235,0.10)] border-[6px] border-white relative">
                  <picture>
                    <source srcSet="/lorenzo-santarelli.webp" type="image/webp" />
                    <img
                      src="/lorenzo-santarelli.jpg"
                      alt="Lorenzo Santarelli"
                      width={640}
                      height={960}
                      fetchPriority="high"
                      className="w-full h-full object-cover"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-60" aria-hidden="true" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] -z-10" aria-hidden="true" />
                <div className="absolute -top-10 -left-10 w-28 h-28 bg-accent/10 rounded-full blur-[60px] -z-10" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I work on */}
      <Section title={t.home.focusTitle} subtitle={t.home.focusSubtitle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.home.focus.map((area, i) => (
            <div key={area.title} className="p-7 rounded-3xl border border-slate-100 bg-slate-50/60">
              <span className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold mb-5" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{area.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{area.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Selected work */}
      <Section title={t.home.workTitle} subtitle={t.home.workSubtitle} dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} moreLabel={moreLabel} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
            {t.home.allProjects}
            <ArrowIcon />
          </Link>
        </div>
      </Section>

      {/* Skills */}
      <Section title={t.home.skillsTitle} subtitle={t.home.skillsSubtitle}>
        <SkillGrid groups={t.skills} />
      </Section>

      {/* Direction */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.home.nextTitle}</h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            {t.home.nextText.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl btn-shadow transition-colors">
            {t.home.nextCta}
            <ArrowIcon />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Home;
