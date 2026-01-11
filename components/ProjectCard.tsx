import React from 'react';
import { Project } from '../types';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-lg p-6 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg dark:hover:border-blue-500/30 hover:-translate-y-1">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button as="a" href={project.liveLink} variant="outline" className="flex-1 text-xs" external>
            Live Demo
          </Button>
          {project.githubLink && (
            <Button as="a" href={project.githubLink} variant="outline" className="flex-1 text-xs" external>
              GitHub
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};