import React, { useState } from "react";
import { projectsData, experienceData } from "./data/projectsData";
import { ProjectCard } from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm";
import { Timeline } from "primereact/timeline";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const categories = ["All", "Frontend", "Fullstack", "Systems"];

  // Metrics Data to show off your real achievements
  const metrics = [
    { number: "180K+", label: "Data Records Parsed (C)" },
    { number: "100%", label: "WCAG / A11y Compliance" },
    { number: "1 Yr+", label: "Enterprise B2B Production" },
    { number: "0", label: "Unresolved Shared Component Bugs" },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className="flex items-center justify-center text-white rounded-full shadow-md animate-pulse"
        style={{
          backgroundColor: item.color,
          width: "2.5rem",
          height: "2.5rem",
        }}
      >
        <i className={`${item.icon} text-sm`}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm mb-8 max-w-xl text-left hover:border-indigo-300 transition-colors duration-300">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            {item.status}
          </h3>
        </div>
        <span className="text-sm font-bold text-indigo-600 block mb-1">
          {item.company}
        </span>
        <span className="text-xs font-semibold text-slate-400 block mb-4 bg-slate-50 px-2 py-1 rounded w-max">
          {item.date}
        </span>
        <p className="text-slate-600 text-sm leading-relaxed font-normal">
          {item.details}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans">
      {/* Premium Hero Header Section */}
      <div className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-3 py-1.5 rounded-full">
            Available for Core Engineering Roles
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-5 mb-4 tracking-tight">
            Xenofon Gkioka
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed font-normal">
            A software engineer building at the intersection of robust systems
            logic and modern web frameworks. Experienced in managing{" "}
            <span className="text-indigo-400 font-semibold">
              global shared components
            </span>
            , scaling enterprise B2B workflows, and low-level memory management.
          </p>
        </div>
      </div>

      {/* NEW: Standout Impact Metrics Bar */}
      <div className="max-w-6xl mx-auto px-6 -translate-y-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-xl">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 border-r last:border-r-0 border-slate-100 text-center lg:text-left"
            >
              <div className="text-3xl font-black text-slate-900 tracking-tight">
                {metric.number}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Dashboard */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        {/* Timeline Work History Section */}
        <section className="mb-24">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Professional Timeline
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Verified commercial experience in full-time and sprint team
              operations.
            </p>
          </div>
          <div className="w-full max-w-3xl">
            <Timeline
              value={experienceData}
              marker={customizedMarker}
              content={customizedContent}
            />
          </div>
        </section>

        {/* Dynamic Project Hub Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Technical Showcases
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Filter across production architectures, automated test suites,
                and database systems.
              </p>
            </div>

            {/* Premium Category Filter Tabs */}
            <div className="flex bg-slate-200/80 p-1.5 rounded-xl border border-slate-300/40">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                    activeFilter === category
                      ? "bg-slate-950 text-white shadow-md scale-105"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Clean Desktop Responsive Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Gateway Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-16 border-t border-slate-200">
          <div>
            <h2 className="text-4xl font-black text-slate-950 tracking-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-normal">
              I am actively looking for my next core engineering opportunity.
              Let's discuss backend production pipelines, React architecture
              patterns, or memory optimization strategies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/XenofonGk"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-indigo-600 hover:border-indigo-500 hover:shadow-md transition-all duration-300"
              >
                <i className="pi pi-github text-xl"></i>
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      {/* Global Page Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white text-center text-slate-400 text-xs font-medium tracking-wide">
        © 2026 Xenofon Gkioka • Engineered with React, PrimeReact & Tailwind
        CSS.
      </footer>
    </div>
  );
}

export default App;
