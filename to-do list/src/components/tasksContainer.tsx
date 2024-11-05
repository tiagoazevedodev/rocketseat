import { Task } from './task'

export function TasksContainer() {
  const tasks = [
    {
      id: 1,
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      completed: false
    },
    {
      id: 2,
      title: 'Tarefa 2',
      completed: false
    },
    {
      id: 3,
      title: 'Tarefa 3',
      completed: true
    }
  ]
  return (
    <div>
      <div className="flex justify-between w-[736px] h-[287] mt-16">
        <div className="flex gap-2 text-Blue text-sm font-bold">
          Tarefas criadas
          <span className="text-gray200 bg-gray400 rounded-3xl px-2">0</span>
        </div>
        <div className="flex gap-2 text-purple100 text-sm font-bold">
          Concluídas
          <span className="text-gray200 bg-gray400 rounded-xl px-2">0</span>
        </div>
      </div>
      <div>
        {tasks.map(task => (
          <Task key={task.id} title={task.title} completed={task.completed} />
        ))}
      </div>
    </div>
  )
}