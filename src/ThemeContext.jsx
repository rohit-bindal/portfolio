import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    primaryColor: "#00709C",
    secondaryColor: "#2243AA",
  });

  const updateThemeColors = (newPrimaryColor, newSecondaryColor) => {
    setTheme({
      primaryColor: newPrimaryColor,
      secondaryColor: newSecondaryColor,
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
