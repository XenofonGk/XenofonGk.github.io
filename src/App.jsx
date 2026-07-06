import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projectsData, experienceData } from "./data/projectsData";
import { ProjectCard } from "./components/ProjectCard";
import { Timeline } from "primereact/timeline";
import { ContactForm } from "./components/ContactForm";

function App() {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const categories = ["All", "Frontend", "Fullstack", "Systems"];

  const languages = [
    { code: "en", name: "English 🇺🇸" },
    { code: "zh", name: "简体中文 🇨🇳" },
    { code: "hi", name: "हिन्दी 🇮🇳" },
    { code: "es", name: "Español 🇪🇸" },
    { code: "fr", name: "Français 🇫🇷" },
  ];

  const localizedExperience = experienceData.map((item) => ({
    ...item,
    status:
      item.company === "Mercell" ? t("mercellTitle") : t("spinworksTitle"),
    details:
      item.company === "Mercell" ? t("mercellDetails") : t("spinworksDetails"),
  }));

  const metrics = [
    { number: "180K+", label: "Records Parsed" },
    { number: "100%", label: "A11y / WCAG" },
    { number: "1 Yr+", label: "Enterprise B2B" },
    { number: "0", label: "Shared Bugs" },
  ];

  const customizedMarker = (item) => (
    <span
      className="flex items-center justify-center text-white rounded-full shadow-md"
      style={{ backgroundColor: item.color, width: "2.5rem", height: "2.5rem" }}
    >
      <i className={`${item.icon} text-sm`}></i>
    </span>
  );

  const customizedContent = (item) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm mb-8 max-w-xl text-left hover:border-indigo-300 transition-colors duration-300 w-full">
      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
        {item.status}
      </h3>
      <span className="text-sm font-bold text-indigo-600 block mb-1">
        {item.company}
      </span>
      <span className="text-xs font-semibold text-slate-400 block mb-4 bg-slate-50/80 px-2 py-1 rounded w-max">
        {item.date}
      </span>
      <p className="text-slate-600 text-sm leading-relaxed font-normal">
        {item.details}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased font-sans w-full">
      {/* Hero View Profile Banner */}
      <div className="bg-slate-950 text-white py-24 relative overflow-hidden border-b border-slate-800 w-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />

        {/* Multilingual Selector Interface Control Box */}
        <div className="absolute top-6 right-6安全 z-30">
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            aria-label="Select Language Interface"
            className="bg-slate-900 text-slate-200 text-xs font-bold border border-slate-700 rounded-xl p-2.5 outline-none cursor-pointer focus:ring-2 focus:ring-indigo-500 shadow-xl"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-left">
          <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-3 py-1.5 rounded-full">
            {t("subtitle")}
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-5 mb-4 tracking-tight">
            Xenofon Gkioka
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed font-normal">
            {t("tagline")}
          </p>
        </div>
      </div>

      {/* Metric Counters Ribbon */}
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

      {/* Main Container Workstation */}
      <main className="max-w-6xl mx-auto px-6 py-6 text-left">
        {/* Career Section */}
        <section className="mb-24 w-full">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {t("experienceTitle")}
            </h2>
            <p className="text-slate-500 text-sm mt-1">{t("experienceSub")}</p>
          </div>
          <div className="w-full max-w-3xl left-0 text-left">
            <Timeline
              value={localizedExperience}
              marker={customizedMarker}
              content={customizedContent}
            />
          </div>
        </section>

        {/* Project Component Grid */}
        <section className="mb-24 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 text-left">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                {t("projectsTitle")}
              </h2>
              <p className="text-slate-500 text-sm mt-1">{t("projectsSub")}</p>
            </div>

            <div className="flex bg-slate-200/80 p-1.5 rounded-xl border border-slate-300/40">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-slate-950 text-white shadow-md scale-105"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Communication Node Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-16 border-t border-slate-200 w-full">
          <div className="text-left">
            <h2 className="text-4xl font-black text-slate-950 tracking-tight mb-4">
              {t("connectTitle")}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-normal">
              {t("connectSub")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/XenofonGk"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile Link"
                className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-indigo-600 hover:border-indigo-500 hover:shadow-md transition-all duration-300"
              >
                <i className="pi pi-github text-xl"></i>
              </a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 bg-white text-center text-slate-400 text-xs font-medium tracking-wide w-full">
        © 2026 Xenofon Gkioka • Engineered with React, PrimeReact & Tailwind
        CSS.
      </footer>
    </div>
  );
}

export default App;
