import { useState } from "react";
import styles from "./Done.module.css";

export function Done() {
  const [countDone, setCountDone] = useState(0);


  return (
    <div className={styles.done}>
      <span>Concluídas</span>
      <span id={styles.countDone}>{countDone}</span>
    </div>
  );
}
