// interface
import { ITask } from '../interfaces/Task';

// css
import styles from './TaskList.module.css';

interface Props {
  taskList : ITask[];
  handleDelete(id:number) : void
}

const TaskList = ({taskList , handleDelete }: Props) => {
  return (
    <>
      {
        taskList.length > 0 ? (
          taskList.map((element)=> (
            <div key={element.id} className={styles.task}>
              <div className={styles.details}>
                <h4>
                  {element.title}
                </h4>
                <p>
                  Dificuldade: {element.difficulty}
                </p>
              </div>
              <div className={styles.actions}>
                <i className='bi bi-pencil'/>
                <i className='bi bi-trash' onClick={()=>{handleDelete(element.id)
                }}/>
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
