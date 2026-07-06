import "react";
import { Card } from "primereact/card";

export function ProjectCard({ project }) {
  // Custom header template for the card to give it a little colored accent bar
  const cardHeader = (
    <div
      className={`h-2 w-full rounded-t-xl ${
        project.category === "Frontend"
          ? "bg-indigo-500"
          : project.category === "Fullstack"
            ? "bg-emerald-500"
            : "bg-amber-500"
      }`}
    />
  );

  return (
    <div className="transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <Card
        header={cardHeader}
        className="h-full shadow-sm hover:shadow-xl border border-slate-200/60 rounded-xl bg-white overflow-hidden"
      >
        {/* Category Badge */}
        <span
          className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3 ${
            project.category === "Frontend"
              ? "bg-indigo-50 text-indigo-600"
              : project.category === "Fullstack"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-amber-50 text-amber-700"
          }`}
        >
          {project.category}
        </span>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-200/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
