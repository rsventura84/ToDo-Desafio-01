import { useState } from "react";
import styles from "./Done.module.css";

interface DoneProps {
  countDone?: number;
}


export function Done({countDone = 0}: DoneProps) {
  return (
    <div className={styles.done}>
      <span>Concluídas</span>
      <span id={styles.countDone}>{countDone}</span>
    </div>
  );
}
