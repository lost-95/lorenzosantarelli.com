import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { ArrowIcon } from '../UI/Icons';

interface ProjectCardProps {
  project: Project;
  moreLabel: string;
}

/** Compact project card used on the home page; links to the full case study. */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, moreLabel }) => (
  <article className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow p-7 flex flex-col h-full">
    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-3">{project.kind}</p>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.summary}</p>
    <ul className="flex flex-wrap gap-2 mb-6 mt-auto" aria-label="Tools">
      {project.tools.slice(0, 4).map((tool) => (
        <li key={tool} className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
          {tool}
        </li>
      ))}
    </ul>
    <Link to={`/portfolio#${project.id}`} className="text-primary font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
      {moreLabel}
      <span className="sr-only">: {project.title}</span>
      <ArrowIcon />
    </Link>
  </article>
);

export default ProjectCard;
