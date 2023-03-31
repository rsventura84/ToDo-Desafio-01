import styles from "./Header.module.css";
import logo_rocket from "../assets/rocket.svg";

export function Header() {
  return (
      <header className={styles.header}>
        <img src={logo_rocket} alt="" />
        <div className={styles.title}>
          <span id={styles.to}>to</span>
          <span id={styles.do} >do</span>
        </div>
      </header>
  );
}
