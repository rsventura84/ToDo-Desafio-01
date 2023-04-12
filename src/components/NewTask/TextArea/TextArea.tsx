import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.css";


interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}
export function TextArea(props: TextAreaProps) {
  return <textarea {...props} className={styles.textarea} />;
}
