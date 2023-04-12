import { Empty } from "./components/Task/Empty/Empty";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Info } from "./components/Task/Info/Info";
import { Task } from "./components/Task/List/Task";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
      </div>
    </>
  );
}
