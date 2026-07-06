import React from "react";
import { Card } from "primereact/card";

export function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between h-full hover:shadow-xl hover:border-indigo-400/50 transition-all duration-300 group">
      <div>
        {/* Sleek Category Badge */}
        <span
          className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-4 ${
            project.category === "Frontend"
              ? "bg-indigo-50 text-indigo-600"
              : project.category === "Fullstack"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-amber-50 text-amber-700"
          }`}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-slate-50 text-slate-500 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-200/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
