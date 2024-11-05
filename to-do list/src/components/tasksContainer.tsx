import { Task } from './task'
import { TaskType } from './task'
import clipBoard from '../assets/clip-board.svg'

interface TasksContainerProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export function TasksContainer({ tasks, setTasks }: TasksContainerProps) {
  return (
    <div>
      <div className="flex justify-between w-[736px] h-[287] mt-16">
        <div className="flex gap-2 text-Blue text-sm font-bold">
          Tarefas criadas
          <span className="text-gray200 bg-gray400 rounded-3xl px-2">{tasks.length}</span>
        </div>
        <div className="flex gap-2 text-purple100 text-sm font-bold">
          Concluídas
          <span className="text-gray200 bg-gray400 rounded-xl px-2">
            {tasks.length
              ? `${tasks.filter(task => task.completed).length} de ${tasks.length}`
              : '0'
            }
          </span>
        </div>
      </div>
      <div>
        {tasks.length
          ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                completed={task.completed}
                id={task.id}
                setTasks={setTasks}
              />
            )))
          : (
            <div className='flex flex-col justify-center items-center gap-3 mt-6 border-t border-gray400 rounded-lg p-20'>
              <img src={clipBoard} className='size-14' />
             <div className=' flex flex-col items-center justify-center'>
              <p className="text-gray300 text-lg font-bold leading-snug">Você ainda não tem tarefas cadastradas</p>
              <p className="text-gray300 text-lg leading-snug">Crie tarefas e organize seus itens a fazer</p>
             </div>
            </div>
          )
        }

      </div>
    </div>
  )
}