import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { api } from '../services/api';

export const ProjectLedger = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hook up our mock data engine
  useEffect(() => {
    api.getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Template to format the complexity badges inside a column
  const complexityTemplate = (rowData) => {
    const isHigh = rowData.complexity === 'High';
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
        isHigh 
          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50' 
          : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/50'
      }`}>
        {rowData.complexity}
      </span>
    );
  };

  // Template to format the programming language pills
  const languageTemplate = (rowData) => {
    return (
      <code className="text-xs font-mono font-bold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 px-2 py-1 rounded">
        {rowData.language}
      </code>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden mt-8">
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <h3 className="text-lg font-bold tracking-tight">Engineering Code Ledger</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Relational index mapping live architectural samples, compiled code logic, and structural UI modules.
        </p>
      </div>

      <div className="p-4 primereact-wrapper">
        <DataTable 
          value={projects} 
          loading={loading}
          responsiveLayout="scroll"
          className="text-sm"
          emptyMessage="No architectural layers found in this runtime context."
        >
          <Column field="title" header="System Target" sortable className="p-4 font-semibold text-slate-900 dark:text-slate-100" />
          <Column field="category" header="Layer Scope" sortable className="p-4 text-slate-600 dark:text-slate-400" />
          <Column body={languageTemplate} header="Engine Stack" className="p-4" />
          <Column body={complexityTemplate} header="Computation Risk" className="p-4" />
        </DataTable>
      </div>
    </div>
  );
};