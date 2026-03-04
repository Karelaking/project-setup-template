"use client";

import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeModeButtonProps {
  size?:
    | "xs"
    | "sm"
    | "default"
    | "lg"
    | "icon-xs"
    | "icon-sm"
    | "icon"
    | "icon-lg";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

export const ThemeModeButton = ({
  size = "icon",
  variant = "outline",
  className = "",
}: ThemeModeButtonProps): React.JSX.Element => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleToggle = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return (
      <Button
        disabled
        size={size}
        variant={variant}
        className={cn(className, "cursor-not-allowed")}
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <Button
      onClick={handleToggle}
      size={size}
      variant={variant}
      className={cn(className, "transition-colors duration-300")}
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`}
    >
      {currentTheme === "dark" ? (
        <Sun className="transition-transform duration-300" />
      ) : (
        <Moon className="transition-transform duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
