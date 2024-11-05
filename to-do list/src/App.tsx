import { Search } from "./components/search"
import Logo from "./assets/logo.svg"
import { TasksContainer } from "./components/tasksContainer"

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex text-white bg-gray700 w-full h-[200px] justify-center items-center">
        <img src={Logo} alt="" />
      </div>
      <div className="flex justify-center items-center -mt-6">
        <Search />
      </div>
      <TasksContainer />
    </div>
  )
}

export default App
