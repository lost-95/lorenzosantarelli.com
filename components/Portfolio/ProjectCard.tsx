
import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.businessProblem}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tools.slice(0, 4).map((tool) => (
            <span key={tool} className="text-[10px] font-bold text-gray-400 border border-gray-200 px-2 py-0.5 rounded">
              {tool.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center">
          <span className="text-xs font-medium text-gray-500">Business Impact: {project.impact.split(' ').slice(0,3).join(' ')}...</span>
          {project.liveUrl ? (
            // plain <a> (not a router Link): the live app is served outside this React app
            <a
              href={project.liveUrl}
              className="bg-primary text-white font-semibold text-sm px-4 py-2 rounded-lg flex items-center gap-1 hover:gap-2 transition-all"
            >
              Open live app
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ) : (
            <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
              View Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
