import * as React from "react";

import styles from "@/app/components/block/block.module.css";

interface BlockProps {
  children: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ children }) => {
  return <div className={styles.block}>{children}</div>;
};
Block.displayName = "Block";

export { Block };
