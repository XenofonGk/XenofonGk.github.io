import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const SidebarLayout = ({ children }) => {
  // Grab our theme state and toggle function from our global provider
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      
      {/* Persistent Left Sidebar Wrapper */}
      <aside className="w-64 border-r border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between">
        <div>
          {/* Header Identity Block */}
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight">Xenofon Gkioka</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Software Architecture Kit</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
              <i className="pi pi-home text-base"></i>
              <span>Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-all">
              <i className="pi pi-cpu text-base"></i>
              <span>System Layers</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50 transition-all">
              <i className="pi pi-database text-base"></i>
              <span>Data Architecture</span>
            </button>
          </nav>
        </div>

        {/* Bottom Utility Actions (Dark Mode Toggle Container) */}
        <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
          <button 
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <i className={theme === 'dark' ? 'pi pi-moon' : 'pi pi-sun'}></i>
              <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
            <i className="pi pi-refresh text-xs opacity-50"></i>
          </button>
        </div>
      </aside>

      {/* Main App Feed Container */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
};