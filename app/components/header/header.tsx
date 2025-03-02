"use client";

import * as React from "react";
import { modeToggle } from "@/app/lib/data";

import styles from "@/app/components/header/header.module.css";

import { _ModeToggle } from "@/app/components/mode-toggle/mode-toggle";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Pieter van Arend</h1>
      <_ModeToggle />
    </header>
  );
};
Header.displayName = "Header";

export { Header };
