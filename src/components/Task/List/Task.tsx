import { TextareaHTMLAttributes, useState } from "react";
import styles from "./Task.module.css";
import check from "../../../assets/check.svg";
import checked from "../../../assets/checked.svg";
import { Trash } from 'phosphor-react';

interface TaskProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasBorder?: boolean;
}

export function Task({ hasBorder = true, ...props }: TaskProps) {
  const [ischeck, setIscheck] = useState(check);
  const [ishasBorder, setIshasBorder] = useState(true);
  function handleCheck() {
    if (ischeck === check) {
      setIscheck(checked);
      setIshasBorder(false)
    } else {
      setIscheck(check);
      setIshasBorder(true)
    }
  }
  hasBorder=(ishasBorder);
  return (
    <div className={styles.task}>
      <div className={styles.container}>
        <button id={styles.buttoncheck} onClick={handleCheck}>
          <img src={ischeck} alt="" />
        </button>
        <span className={hasBorder ? styles.coment : styles.comentDone}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
        <button id={styles.buttontash} onClick={handleCheck}>
          <Trash  size={20}/>
        </button>
      </div>
    </div>
  );
}
