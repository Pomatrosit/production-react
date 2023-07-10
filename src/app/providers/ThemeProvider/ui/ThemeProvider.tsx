import { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.NORMAL;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === THEME.NORMAL ? THEME.DARK : THEME.NORMAL;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  const defaultValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
