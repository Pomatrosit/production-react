import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { Suspense } from "react";
import AppRouter from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main Page</Link>
      <Link to="/about">About Page</Link>
      <AppRouter />
    </div>
  );
};

export default App;
