import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto w-full pt-8 md:pt-16 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
      
      <div className="prose dark:prose-invert prose-gray mb-12">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I am a First-year B.Sc. IT student based in {PERSONAL_INFO.location}.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
          My primary interest lies at the intersection of cybersecurity and system correctness. 
          While many focus on feature velocity, I focus on building useful, real-world systems that are secure by design.
          I believe that understanding how systems fail is the best way to learn how to build them correctly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Connect</h3>
          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="text-sm font-medium">{link.platform}</span>
                <span className="text-xs opacity-50">↗</span>
              </a>
            ))}
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-sm font-medium">Email</span>
              <span className="text-xs opacity-50">↗</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">Resources</h3>
           <Button as="a" href={`/${PERSONAL_INFO.resumeFileName}`} download={PERSONAL_INFO.resumeFileName} variant="secondary" className="w-full md:w-auto">
             Download Resume (PDF)
           </Button>
        </div>
      </div>
    </div>
  );
};