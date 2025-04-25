"use client"

import { Task } from "@/app/page"
import { TaskCard } from "./TaskCard"

interface Props {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskList({ tasks, onToggle, onDelete }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  )
}
