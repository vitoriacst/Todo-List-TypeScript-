// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// css
import styles from './App.module.css';

// Interface
import { useState } from "react";
import { ITask } from './interfaces/Task';

function App() {
  const [taskList , setTaskList ] = useState<ITask[]>([]);
  // -|> taking from the Itask interface and typing as an array

  const deleteTask = (id: number) => {
    setTaskList
    (
      taskList.filter((element)=>{
        return element.id !== id;
      })
    )
  };

  return (
  <div>
    <Modal/>
    <Header/>
    <main className={styles.main}>
      <div>
        <h2>Todo List</h2>
        <TaskForm
          btnText="Criar Tarefas"
          taskList={taskList}
          setTaskList={setTaskList}/>
      </div>
      <div>
        <h2>Suas Tarefas:</h2>
        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
        />
      </div>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
