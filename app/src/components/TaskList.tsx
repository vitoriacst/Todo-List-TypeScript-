// interface
import { ITask } from '../interfaces/Task';

interface Props {
  taskList : ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
      {
        taskList.length > 0 ? (
          taskList.map((element)=> (
            <div key={element.id}>
              {element.title}
            </div>
          ))
        ) :
        <p>Not found Tasks</p>
      }
    </>
  )
}

export default TaskList
