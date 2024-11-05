import trash from '../assets/trash.svg';
import checkSign from '../assets/check-sign.svg';

interface TaskProps {
  title: string;
  completed: boolean;
  id: number;
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

export interface TaskType {
  id: number;
  title: string;
  completed: boolean;
}

export function Task({ title, completed, id, setTasks }: TaskProps) {
  
  const handleDelete = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const handleComplete = () => {
    setTasks((prevTasks) => prevTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    }));
  }

  return (
    <div className="flex justify-between items-start w-[736px] p-2 bg-gray500 rounded-lg mt-4 border border-gray400">
      <div className='flex gap-3 self-start p-2'>
        { completed 
          ? <button className='flex justify-center items-center self-start rounded-full size-4 bg-purpleDark hover:brightness-125' onClick={handleComplete}> <img className='mt-[2px]' src={checkSign} /></button>
          : <button className='self-start rounded-full size-4 border border-Blue hover:bg-Blue hover:bg-opacity-20' onClick={handleComplete}/>
        }
        { completed
          ? <p className="text-gray300 text-sm leading-snug max-w-[632px] line-through">{title}</p>
          : <p className="text-gray100 text-sm leading-snug max-w-[632px]">{title}</p>
        }
      </div>
      <button className="self-start" onClick={handleDelete}>
        <img src={trash} />
      </button>
    </div>
  )
}