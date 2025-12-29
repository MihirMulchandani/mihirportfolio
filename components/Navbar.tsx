import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border-2 border-gray-900 dark:border-gray-100 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full"></div>
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">Mihir Mulchandani</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 mr-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile Nav Link strip for smaller screens */}
      <div className="md:hidden border-t border-gray-100 dark:border-gray-800 flex justify-center py-2 gap-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-xs font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-blue-600 dark:text-blue-500'
                  : 'text-gray-600 dark:text-gray-400'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};