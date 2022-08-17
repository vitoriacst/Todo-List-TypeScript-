
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ITask } from '../interfaces/Task';
// css
import styles from './styles/TaskForm.module.css';

// interface

interface props {
  btnText : string
  taskList : ITask[]
  setTaskList? : React.Dispatch<React.SetStateAction<ITask[]>>
  task? : ITask | null
  handleUpdate?(id:number , title: string , difficulty: number): void
  // -|> dispatching an event that will work with a list of tasks

}

const TaskForm = ({btnText , taskList , setTaskList , task , handleUpdate}: props) => {

  const [id , setId] = useState<number>(0);
  const [title , setTitle] = useState<string>("");
  const [difficulty , setDifficulty] =useState<number>(0);

  useEffect(()=>{
    if(task){
      setId(task.id);
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  },[task])

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(handleUpdate){
      handleUpdate(id,title,difficulty)
    }else{
      const id = Math.floor(Math.random() * 1000)
      const newTask : ITask = {id,title,difficulty}
      setTaskList!([...taskList , newTask])
      // -|> using ! to force the typescript to understand that it will get a result
      setTitle("")
      setDifficulty(0)
  }

  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "title"){
      setTitle(event.target.value)
    // -|> It will get the event value from the change
    } else{
      setDifficulty(parseInt(event.target.value))
    }
  }

  return (
      <form className={styles.form} onSubmit={addTaskHandler}>
          <div
            className={styles.input_container}>
            <label htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="Titulo da tarefa"
              value={title}
              onChange={handleChange}
            />

          </div>
          <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade</label>
            <input
              type="text"
              name="difficulty"
              onChange={handleChange}
              value={difficulty}
            />
          </div>
            <input
              type="submit"
              name="difficulty"
              value={btnText} />
      </form>
  )
}

export default TaskForm
