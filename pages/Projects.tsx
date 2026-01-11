import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto w-full pt-8 md:pt-16 animate-fade-in">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Selected Work</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Systems exploring strict client-side constraints, deterministic behavior, and trust boundaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};