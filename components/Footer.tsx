import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mihir Mulchandani. All rights reserved.
        </div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};