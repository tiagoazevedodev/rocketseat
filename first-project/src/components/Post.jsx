import { Comment } from "./Comment";
export function Post({ author, content, role }) {
  return (
    <article className="bg-zinc-800 rounded-lg p-10 first:mt-0 mt-8">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="size-14 rounded-lg border-4 border-zinc-800 outline-2 outline-ignite-green"
            src="https://github.com/tiagoazevedodev.png"
          />
          <div className="flex flex-col ">
            <strong className="text-gray-100 leading-relaxed">{author}</strong>
            <span className="text-gray-400 text-sm leading-re">{role}</span>
          </div>
        </div>
        <time className="text-sm text-gray-400" title="11 de maio, 18:31" dateTime="">Publicado há 1h</time>
      </header>

      <div className="leading-relaxed text-gray-300 mt-6">
        <p className="mt-4">Fala galeraa 👋</p>
        <p className="mt-4">Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p className="mt-4"><a className="font-bold text-ignite-green hover:text-second-green" href="">👉 jane.design/doctorcare</a></p>
        <p className="mt-4"><a className="font-bold text-ignite-green hover:text-second-green" href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
      <form className="w-full mt-6 pt-6 border-t border-zinc-700">
        <strong className="leading-relaxed text-gray-100">Deixe seu feedback</strong>
        <textarea className="w-full bg-zinc-900 resize-none h-24 rounded-lg p-4 text-gray-100 leading-snug mt-4 focus:border-ignite-green focus:border" placeholder="Deixe um comentário"></textarea>
        <button className="px-6 py-4 bg-second-green rounded-lg text-white font-bold cursor-pointer hover:bg-ignite-green transition-transform duration-200" type="submit">Publicar</button>
      </form>
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}