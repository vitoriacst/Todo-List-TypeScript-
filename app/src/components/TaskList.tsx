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
              <div>
                <h4>
                  {element.title}
                </h4>
                <p>
                  Dificuldade: {element.difficulty}
                </p>
              </div>
              <div>
                <i className='bi bi-pencil'/>
                <i className='bi bi-trash'/>
              </div>
            </div>
          ))
        ) :
        <p>Not found Tasks</p>
      }
    </>
  )
}

export default TaskList
