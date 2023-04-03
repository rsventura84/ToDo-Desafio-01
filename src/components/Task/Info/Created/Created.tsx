import { useState } from "react";
import styles from "./Created.module.css";

export function Created() {
  const [countCreated, setCountCreated] = useState(0);


  return (
    <div className={styles.created}>
      <span>Tarefas Criadas</span>
      <span id={styles.countCreated}>{countCreated}</span>
    </div>
  );
}
