import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState<string>(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, setTheme]);

  return [colorTheme, setTheme] as const;
}
