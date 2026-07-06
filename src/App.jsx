import React, { useState } from "react"; // 1. Imported useState
import { projectsData } from "./data/projectsData";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  // 2. Create a state variable called 'activeFilter'. Default value is 'All'
  const [activeFilter, setActiveFilter] = useState("All");

  // 3. Simple logic to filter our projects list based on the active state
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // A helper array to build our filter menu buttons dynamically
  const categories = ["All", "Frontend", "Fullstack", "Systems"];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b border-slate-200/80 py-16 mb-12">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              Software Engineer Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
              Xenofon Gkioka
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Specializing in low-level systems programming, robust enterprise
              backend solutions, and accessible, high-performance web
              applications.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* Section Title and Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-500 text-sm">
              Production apps, system utilities, and academic engineering.
            </p>
          </div>

          {/* 4. Interactive Filter Tabs Container */}
          <div className="flex bg-slate-200/60 p-1 rounded-xl border border-slate-200/40 self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                // When clicked, update the active filter state!
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Render the filtered list instead of the whole list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
