"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { modeToggle } from "@/app/lib/data";

import styles from "@/app/components/mode-toggle/mode-toggle.module.css";

import { Button } from "@/app/components/button/button";

import clsx from "clsx";

interface ModeToggleProps {
  children: React.ReactNode;
  className?: string;
}

const ModeToggle: React.FC<ModeToggleProps> & {
  Wrapper: React.FC<ModeToggleWrapperProps>;
  Button: React.FC<ModeToggleButtonProps>;
} = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles["mode-toggle"], className)} {...props}>
      {children}
    </div>
  );
};
ModeToggle.displayName = "ModeToggle";

interface ModeToggleWrapperProps {
  children: React.ReactNode;
  className?: string;
}

ModeToggle.Wrapper = ({ children, className }) => {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
};
ModeToggle.Wrapper.displayName = "ModeToggleWrapper";

interface ModeToggleButtonProps {
  children: React.ReactNode;
  className?: string;
  theme?: string;
  onClick?: React.ComponentProps<typeof Button>["onClick"];
}

ModeToggle.Button = ({ children, className, theme, onClick }) => {
  const { setTheme } = useTheme();

  return (
    <button
      onClick={(event) => {
        onClick?.(event);
        if (theme) {
          setTheme(theme);
        }
      }}
      className={clsx(styles.button, className)}
    >
      {children}
    </button>
  );
};
ModeToggle.Button.displayName = "ModeToggleButton";

// Pre-defined function [Derivative of <ModeToggle>]
const _ModeToggle: React.FC = () => {
  return (
    <ModeToggle.Wrapper>
      <ModeToggle>
        {modeToggle.map((item) => (
          <ModeToggle.Button key={item.theme} theme={item.theme}>
            <item.icon className={styles.icon} />
          </ModeToggle.Button>
        ))}
      </ModeToggle>
    </ModeToggle.Wrapper>
  );
};

export { _ModeToggle };
