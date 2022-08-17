// components
// import Footer from "./components/Footer";
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
  const[taskUpdate , setTaskUpdate] = useState<ITask | null>(null)
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

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask) :void => {
    hideOrShowModal(true)
    setTaskUpdate(task)
  }

  const updateTask = (id:number , title: string , difficulty: number)=>{
    const updatedTask : ITask = {id,title,difficulty}
    const updatedItems = taskList.map((element)=>{
      return element.id === updatedTask.id ? updatedTask : element
    })
    setTaskList(updatedItems)
    hideOrShowModal(false)
  }
  return (
  <div>
    <Modal
      children={
        <TaskForm
            btnText="Editar Tarefa"
            task={taskUpdate}
            taskList={taskList}
            handleUpdate={updateTask}
         />}
      />
    <Header/>
    <main className={styles.main}>
      <div>
        <h2>Nova Tarefa</h2>
        <TaskForm
          btnText="Criar Tarefas"
          taskList={taskList}
          setTaskList={setTaskList}
           />
      </div>
      <div>
        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}
        />
      </div>
    </main>
    {/* <Footer/> */}
  </div>
  );
}

export default App;
