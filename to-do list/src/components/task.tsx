import trash from '../assets/trash.svg';

interface TaskProps {
  title: string;
  completed: boolean;
}


export function Task({ title, completed }: TaskProps) {
  return (
    <div className="flex justify-between items-center w-[736px] h-[54px] p-2 bg-gray500 rounded-lg mt-4 border border-gray400">
      <div className='flex'>
        <input
          type="checkbox"
          className=" rounded-full "
          defaultChecked={completed}
        />
        <p className="text-gray100 text-sm leading-snug">{title}</p>
      </div>
      <button className="self-start">
        <img src={trash} />
      </button>
    </div>
  )
}