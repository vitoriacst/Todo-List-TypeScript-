// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// css
import styles from './App.module.css';

// Interface
import {ITask} from './interfaces/Task'

function App() {
  return (
  <div>
    <Header/>
    <main className={styles.main}>
      <div>
        <h2>Todo List</h2>
        <TaskForm btnText="Criar Tarefas"/>
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <TaskList/>
      </div>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
