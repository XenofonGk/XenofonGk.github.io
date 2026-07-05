import React, { useEffect, useState } from "react";
import { SidebarLayout } from "./layout/SidebarLayout";
import { ProjectLedger } from "./components/ProjectLedger";
import { api } from "./services/api";

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the developer identity block from our mock api layer
  useEffect(() => {
    api
      .getProfile()
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SidebarLayout>
      {loading ? (
        <div className="flex items-center gap-3 text-slate-500">
          <i className="pi pi-spin pi-spinner text-xl"></i>
          <span>Waking engine data layers...</span>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Hero Welcome Block */}
          <header className="border-b border-slate-200 pb-6 dark:border-slate-800">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400">
              System Dashboard
            </span>
            <h2 className="text-3xl font-bold tracking-tight mt-1">
              {profile?.name}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              {profile?.bio}
            </p>
          </header>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <h3 className="font-semibold text-sm text-slate-500">
                Core Runtime
              </h3>
              <p className="text-2xl font-bold mt-2 text-indigo-600 dark:text-indigo-400">
                React 19 / Vite
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
              <h3 className="font-semibold text-sm text-slate-500">
                Active Core Stack
              </h3>
              <p className="text-2xl font-bold mt-2">C++ / SQL / PrimeReact</p>
            </div>
          </div>
        </div>
      )}
    </SidebarLayout>
  );
}

export default App;
