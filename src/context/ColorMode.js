import React, { useState, createContext } from "react";

export const ColorMode = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ColorMode.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ColorMode.Provider>
  );
};
