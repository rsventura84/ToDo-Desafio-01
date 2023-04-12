import { useState } from "react";
import styles from "./Created.module.css";


interface CreatedProps {
  countCreated?: number;
}

export function Created({countCreated}: CreatedProps) {

  return (
    <div className={styles.created}>
      <span>Tarefas Criadas</span>
      <span id={styles.countCreated}>{countCreated}</span>
    </div>
  );
}
