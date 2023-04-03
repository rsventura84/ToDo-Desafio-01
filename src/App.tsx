import { Empty } from "./components/Empty/Empty";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Info } from "./components/Task/Info/Info";
import { Task } from "./components/Task/List/Task";
import "./global.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <NewTask />
      <Info />
      <Task />
      <Task />
      <Task />
    </div>
  );
}
