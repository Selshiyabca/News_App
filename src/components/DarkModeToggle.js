import React, { useState, useEffect } from "react";
import "./DarkModeToggle.css"; // Add styling for the switch

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>
      <span className="theme-name">{darkMode ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default DarkModeToggle;