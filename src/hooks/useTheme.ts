import { useEffect, useState } from "react";
import { UseTheme } from "types/hook-types";

const useTheme: UseTheme = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => setTheme(localStorage.getItem("theme") ?? "dark"), []);

  const changeTheme = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(localStorage.getItem("theme") || "dark");
  };
  return { changeTheme, theme };
};

export { useTheme };
