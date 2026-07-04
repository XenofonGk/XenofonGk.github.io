import { prototype } from "postcss/lib/previous-map";
import { portfolioData } from "../data/portofolioData";

const delay = (ms) => Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  getProfile: async () => {
    await delay(500);
    return { ...portfolioData.developer };
  },

  getStrengths: async () => {
    await delay(500);
    return [...portofolioData.strengths];
  },
  getProjects: async () => {
    if (Math.random() < 0.05) {
      throw new Error(
        "Internal Server Error: Failed to fetch projects payload.",
      );
    }
    return [...portofolioData.projects];
  },
};
