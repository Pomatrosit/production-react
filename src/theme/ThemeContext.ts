import { createContext } from "react";

export enum THEME {
  NORMAL = "normal",
  DARK = "dark",
}

export interface IThemeContext {
  theme: THEME;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const LOCAL_STORAGE_THEME_KEY = "theme";
