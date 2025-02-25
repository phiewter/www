import styles from "@/app/page.module.css";
import ModeToggle from "./components/mode-toggle/mode-toggle";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Pieter van Arend</h1>
          <ModeToggle />
        </header>
        <main></main>
      </div>
    </div>
  );
}
