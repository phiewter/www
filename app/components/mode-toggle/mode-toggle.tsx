"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import Button from "@/app/components/button/button";
import buttonStyles from "@/app/components/button/button.module.css";

import modeToggleStyles from "@/app/components/mode-toggle/mode-toggle.module.css";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className={modeToggleStyles["mode-toggle"]}>
      <Button className={buttonStyles.small} onClick={() => setTheme("light")}>
        Light
      </Button>
      <Button className={buttonStyles.small} onClick={() => setTheme("dark")}>
        {" "}
        Dark
      </Button>
    </div>
  );
}
