import plusIcon from '../assets/plus-icon.svg'
import { TaskType } from './task'
import { useState } from 'react'

export function Search({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<TaskType[]>> }) {
  const [newTask, setNewTask] = useState<string>('')

  const handleCreateTask = () => {
    if (!newTask) return
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        title: newTask,
        completed: false
      }
    ])
    setNewTask('')
  }
  return (
    <div className="w-[736px] h-[54px] flex gap-2">
      <input
        placeholder="Adicione uma nova tarefa"
        className="w-[638px] h-[54px] px-4 py-2 bg-gray500 text-gray100 rounded-lg border border-gray700 leading-snug placeholder-gray300"
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button onClick={handleCreateTask} className="flex justify-center items-center gap-2 bg-BlueDark w-[90px] h-[52px] rounded-lg text-gray-100">
        Criar
        <img src={plusIcon} alt="" />
      </button>
    </div>
  )
}