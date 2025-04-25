"use client"

import { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface Props {
  onAdd: (task: { title: string; description: string }) => void
}

export function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 rounded shadow bg-[var(--background)]">
      <h2 className="text-lg font-semibold mb-2">Nova Tarefa</h2>
      <input
        className="w-full border p-2 rounded mb-2 bg-transparent text-[var(--foreground)] border-[var(--foreground)]"
        placeholder="Título da tarefa"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded mb-2 bg-transparent text-[var(--foreground)] border-[var(--foreground)]"
        placeholder="Descrição (opcional)"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-[var(--foreground)] text-[var(--background)] p-2 rounded flex items-center justify-center gap-2"
      >
        <FiPlus /> Adicionar Tarefa
      </button>
    </form>
  )
}
