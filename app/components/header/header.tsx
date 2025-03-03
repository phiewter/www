"use client";

import * as React from "react";

import Link from "next/link";

import styles from "@/app/components/header/header.module.css";

import { _ModeToggle } from "@/app/components/mode-toggle/mode-toggle";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Pieter van Arend</h1>
      <div className={styles.second}>
        <Link href="https://github.com/phiewter" target="_blank">
          GitHub
        </Link>
        <_ModeToggle />
      </div>
    </header>
  );
};
Header.displayName = "Header";

export { Header };
