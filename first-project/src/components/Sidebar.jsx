import { PencilLine} from "phosphor-react"

export function Sidebar() {
  return (
    <aside className="bg-zinc-800 rounded-lg p-4 w-full">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1618931692805-4c2c463eca05?q=70&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="flex flex-col items-center">
        <img
          className="size-14 rounded-lg border-4 border-zinc-800 -mt-6 outline-2 outline-ignite-green" 
          src="https://github.com/tiagoazevedodev.png"
        />
        <h2 className="text-gray-100 mt-2 leading-relaxed">Tiago Azevedo</h2>
        <p className="text-gray-400 text-sm leading-relaxed">Frontend Engineer</p>
      </div>
      <footer className="flex border-t border-zinc-700 mt-6 pt-6 px-8 pb-8 w-full">
        <a className="w-full gap-2 border p-2 text-sm border-ignite-green text-ignite-green items-center justify-center flex font-bold rounded-lg hover:bg-ignite-green hover:text-white transition duration-200" href="#editar">
          <PencilLine size={16}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
