"use client"

import { Task } from "@/app/page"
import { FiCheckCircle, FiTrash2 } from "react-icons/fi"

interface Props {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskCard({ task, onToggle, onDelete }: Props) {
  return (
    <div className="border rounded p-4 shadow bg-[var(--background)] text-[var(--foreground)] border-[var(--foreground)]">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="mt-1 accent-[var(--foreground)]"
        />
        <div className="flex-1">
          <h3 className={`font-semibold ${task.done ? 'line-through opacity-50' : ''}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className={`text-sm ${task.done ? 'line-through opacity-50' : ''}`}>
              {task.description}
            </p>
          )}
        </div>
        <div className="flex gap-2 mt-1">
          <button onClick={() => onToggle(task.id)} title="Marcar como concluída">
            <FiCheckCircle className="text-[var(--foreground)] hover:text-green-500" />
          </button>
          <button onClick={() => onDelete(task.id)} title="Excluir">
            <FiTrash2 className="text-[var(--foreground)] hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
