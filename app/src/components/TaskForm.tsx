
interface props {
  btnText : string
}

const TaskForm = ({btnText}: props) => {
  return (
    <form >
        <div>
          <label htmlFor="title">
            Title
          </label>
          <input
          type="text"
          name="title"
          id="Titulo da tarefa" />
        </div>
        <label htmlFor="difficulty"></label>
        <input type="submit" name="difficulty" value={btnText} />
    </form>
  )
}

export default TaskForm
