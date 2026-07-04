export const portfolioData = {
  developer: {
    name: "Xenofon Gkioka",
    role: "Software Engineering Intern & Developer",
    bio: "Focused on building performant backend systems and optimized, enterprise-grade user interfaces.",
  },

  // Strengths page mapping
  strengths: [
    {
      id: "systems",
      title: "Systems & Architecture",
      icon: "pi pi-cpu",
      summary:
        "Low-level system logic, memory optimization, and data structures.",
      featuredLanguage: "C++",
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      icon: "pi pi-database",
      summary:
        "Relational schema design, query optimization, and transaction safety.",
      featuredLanguage: "SQL",
    },
    {
      id: "operations",
      title: "Operations & Leadership",
      icon: "pi pi-users",
      summary:
        "Resource coordination, workflow automation, and student federation operations.",
      featuredLanguage: "Agile / Management",
    },
  ],

  projects: [
    {
      id: "cpp-automation",
      title: "System Resource Automation Engine",
      language: "C++",
      category: "Systems Programming",
      complexity: "High",
      description:
        "A performance-focused system handling direct memory allocation and optimized scheduling algorithms.",
      codeSnippet: `#include <iostream>\n#include <vector>\n\n// Optimized resource allocation logic\nvoid allocateResources(std::vector<int>& nodes) {\n    for(int i = 0; i < nodes.size(); ++i) {\n        // Low-level processing emulation\n    }\n}`,
    },
    {
      id: "sql-analytics",
      title: "Relational Analytics & Metrics Schema",
      language: "SQL",
      category: "Database Architecture",
      complexity: "Medium",
      description:
        "Designed multi-table relational structures with optimized indexing, heavy inner joins, and transactional isolation layers.",
      codeSnippet: `SELECT \n    u.user_id, \n    r.role_name,\n    COUNT(l.log_id) as total_operations\nFROM users u\nINNER JOIN roles r ON u.role_id = r.role_id\nLEFT JOIN operational_logs l ON u.user_id = l.user_id\nGROUP BY u.user_id, r.role_name;`,
    },
    {
      id: "react-wrapper-kit",
      title: "Enterprise Component Abstraction Kit",
      language: "React / PrimeReact",
      category: "Frontend Architecture",
      complexity: "High",
      description:
        "Developed a reusable wrapper layer combining PrimeReact infrastructure with design system specifications using Tailwind CSS.",
      codeSnippet: `// Custom high-order wrapper architecture\nexport const CustomDataTable = ({ value, filters }) => {\n    return (\n        <div className="p-4 bg-slate-900 rounded-lg shadow">\n            <DataTable value={value} filters={filters} responsiveLayout="scroll">\n                {/* Abstracted structural logic */}\n            </DataTable>\n        </div>\n    );\n};`,
    },
  ],
};
