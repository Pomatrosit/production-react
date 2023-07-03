import { useContext } from "react";
import { THEME, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: THEME;
}

const useTheme = (): UseThemeResult => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
