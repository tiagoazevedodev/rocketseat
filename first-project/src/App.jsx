import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header />
      <div className="max-w-[70rem] mx-auto p-y-0 px-4 grid grid-cols-[256px,1fr] gap-8 items-start text-white mt-2">
        <Sidebar />
        <main>
          <Post author="Tiago Azevedo" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." role={"Frontend Engineer"} />
          <Post author="Tiago Azevedo" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." role={"Frontend Engineer"} />
          <Post author="Tiago Azevedo" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." role={"Frontend Engineer"} />
          
        </main>
      </div>
    </div>
  )
}

export default App
