import * as React from "react";

import styles from "@/app/components/button/button.module.css";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button className={clsx(styles.button, className)} {...props} ref={ref}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
