"use client";

import { useState } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

export interface Task {
  id: number
  title: string
  description: string
  done: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Omit<Task, 'id' | 'done'>) => {
    const newTask = { ...task, id: Date.now(), done: false }
    setTasks(prev => [...prev, newTask])
  }

  const toggleDone = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const removeTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Lista de Tarefas</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleDone} onDelete={removeTask} />
    </div>
  )
}

export default App
