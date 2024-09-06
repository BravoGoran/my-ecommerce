import React, { useContext } from "react";
import { ColorMode } from "../context/ColorMode";

const ButtonMode = () => {
  const { theme, toggleTheme } = useContext(ColorMode);

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ButtonMode;
