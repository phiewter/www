"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import Button from "@/app/components/button/button";
import buttonStyles from "@/app/components/button/button.module.css";

import modeToggleStyles from "@/app/components/mode-toggle/mode-toggle.module.css";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className={modeToggleStyles["mode-toggle"]}>
      <Button
        className={
          theme === "light" ? buttonStyles.active : buttonStyles.sleeper
        }
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Light
      </Button>
      <Button
        className={
          theme === "dark" ? buttonStyles.active : buttonStyles.sleeper
        }
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Dark
      </Button>
    </div>
  );
}
