import * as React from "react";

import styles from "@/app/components/page/page.module.css";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
Page.displayName = "Page";

export { Page };
