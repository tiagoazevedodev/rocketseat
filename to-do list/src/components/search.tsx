import plusIcon from '../assets/plus-icon.svg'

export function Search() {
  return (
    <div className="w-[736px] h-[54px] flex gap-2">
      <input
        placeholder="Adicione uma nova tarefa"
        className="w-[638px] h-[54px] px-4 py-2 bg-gray500 text-gray300 rounded-lg border border-gray700 leading-snug placeholder-gray300"
        type="text"
      />

      <button className="flex justify-center items-center gap-2 bg-BlueDark w-[90px] h-[52px] rounded-lg text-gray-100">
        Criar
        <img src={plusIcon} alt="" />
      </button>
    </div>
  )
}