
import { ChangeEvent, useState } from 'react';
// css
import styles from './TaskForm.module.css';

// interface

interface props {
  btnText : string
}

const TaskForm = ({btnText}: props) => {

  const [id , setId] = useState<number>(0);
  const [title , setTitle] = useState<string>("");
  const [difficulty , setDifficulty] =useState<number>(0);

  const addTaskHandler = () => {

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
              onChange={handleChange}
            />

          </div>
          <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade</label>
            <input
              type="text"
              name="difficulty"
              onChange={handleChange}
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
