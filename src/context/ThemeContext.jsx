import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ childern }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    const themeLink = document.getElementById("primereact-theme-link");
    if (themeLink) {
      if (theme === "dark") {
        themeLink.href = "/themes/lara-dark-indigo/theme.css";
      } else {
        themeLink.href = "/themes/lara-light-indigo/theme.css";
      }
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toogleTheme }}
    ></ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
