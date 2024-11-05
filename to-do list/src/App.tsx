import { Search } from "./components/search"
import Logo from "./assets/logo.svg"
import { TasksContainer } from "./components/tasksContainer"
import { useState } from "react"
import { TaskType } from "./components/task"

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      title: "Criar um novo projeto",
      completed: false,
    },
    {
      id: 2,
      title: "Criar um novo projeto",
      completed: false,
    },
    {
      id: 3,
      title: "Criar um novo projeto",
      completed: false,
    },
    {
      id: 4,
      title: "Criar um novo projeto",
      completed: true,
    },
  ])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex text-white bg-gray700 w-full h-[200px] justify-center items-center">
        <img src={Logo} />
      </div>
      <div className="flex justify-center items-center -mt-6">
        <Search setTasks={setTasks} />
      </div>
      <TasksContainer tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
