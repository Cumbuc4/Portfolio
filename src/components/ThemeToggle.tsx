"use client";

import { useState, useEffect } from "react";
import { Button } from "@once-ui-system/core";

export function ThemeToggle() {
  const [theme, setTheme] = useState<string>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("data-theme") || "dark";
    setTheme(savedTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("data-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  if (!mounted) {
    return (
      <Button variant="tertiary" size="s" className="nav-button" aria-label="Toggle theme">
        🌙
      </Button>
    );
  }

  return (
    <Button
      variant="tertiary"
      size="s"
      onClick={toggleTheme}
      className="nav-button"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </Button>
  );
}
