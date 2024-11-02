import { ThumbsUp, Trash } from "phosphor-react";


export function Comment() {
  return (
    <div className="mt-6 flex gap-4">
      <img
        className="size-12 rounded-lg"
        src="https://github.com/tiagoazevedodev.png"
      />
      <div className="flex-1">
        <div className="bg-zinc-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div >
              <strong className="block text-sm leading-relaxed">Tiago Azevedo</strong>
              <time className="block text-xs leading-relaxed text-gray-400">Cerca de 1 hora atrás</time>
            </div>
            <button className="bg-transparent text-gray-400 border-0 hover:text-red-500" title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">Otimo parabens</p>
        </div>
        <footer className="mt-4">
          <button className="flex bg-transparent text-gray-400 items-center hover:text-second-green">
            <ThumbsUp size={24} className="mr-2" />
            aplaudir <span id="crazy-span">20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}