
// css
import styles from './TaskForm.module.css'

// interface

interface props {
  btnText : string
}

const TaskForm = ({btnText}: props) => {
  return (
      <form className={styles.form}>
          <div
            className={styles.input_container}>
            <label htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="Titulo da tarefa" />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="difficulty">Dificuldade</label>
            <input type="text"
              name="difficulty"/>
          </div>
            <input
              type="submit"
              name="difficulty"
              value={btnText} />
      </form>
  )
}

export default TaskForm
