import styles from "@/app/page.module.css";

import { Header } from "@/app/components/header/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <main></main>
      </div>
    </div>
  );
}
