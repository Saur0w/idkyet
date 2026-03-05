"use client";

import styles from "./page.module.css";
import Landing from "@/component/Landing";

export default function Home() {
  return (
    <div className={styles.page}>
     <Landing />
    </div>
  );
}
