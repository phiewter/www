import * as React from "react";

import styles from "@/app/components/container/container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className={styles.container} {...props} ref={ref}>
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
