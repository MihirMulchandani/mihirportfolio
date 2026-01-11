import React from 'react';
import { PERSONAL_INFO, PHILOSOPHY_POINTS } from '../constants';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto w-full pt-12 md:pt-24 animate-fade-in">
      <div className="space-y-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
          Focused on <span className="text-gray-900 dark:text-white font-normal">security-first web systems</span>. 
          <br className="hidden md:block"/>
          Emphasis on trust boundaries and deterministic behavior.
        </p>
      </div>

      <div className="space-y-4 mb-16">
        {PHILOSOPHY_POINTS.map((point, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="font-mono text-sm tracking-tight">{point}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Button as="a" href="#/projects" variant="primary">
          View Projects
        </Button>
        <Button as="a" href={`/${PERSONAL_INFO.resumeFileName}`} download={PERSONAL_INFO.resumeFileName} variant="outline">
          Download Resume
        </Button>
        <Button as="a" href={`mailto:${PERSONAL_INFO.email}`} variant="outline">
          Contact Now
        </Button>
      </div>
    </div>
  );
};