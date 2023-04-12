import { TextareaHTMLAttributes, useState } from "react";
import styles from "./Task.module.css";
import check from "../../../assets/check.svg";
import checked from "../../../assets/checked.svg";
import { Trash } from "phosphor-react";

interface TaskProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasBorder?: boolean;
  content: string;
  countDone?:boolean;
  onDeleteComment: (comment: string) => void;
  onCheck: (countDone: boolean) => void;
  onChecked: (countDone: boolean) => void;
}


export function Task({content,countDone=true, hasBorder = true, onDeleteComment,onCheck,onChecked, ...props }: TaskProps) {
  const [ischeck, setIscheck] = useState(check);
  const [ishasBorder, setIshasBorder] = useState(true);
  
  function handleCheck() {
    if (ischeck === check) {
      setIscheck(checked);
      setIshasBorder(false);
      onCheck(countDone)
    } else {
      setIscheck(check);
      setIshasBorder(true);
      onChecked(countDone)
    }
  }


  hasBorder = ishasBorder;

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.task}>
      <div className={styles.container}>
        <div className={styles.container_1}>
          <button id={styles.buttoncheck} onClick={handleCheck}>
            <img src={ischeck} alt="" />
          </button>
        </div>
        <div className={styles.container_2}>
          <span className={hasBorder ? styles.coment : styles.comentDone}>
            <text>{content}</text>
          </span>
        </div>
        <div className={styles.container_3}>
          <button id={styles.buttontash} onClick={handleDeleteComment}>
            <Trash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
