"use client";

import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { TaskProps } from "../types/task";
import { Button } from "./button";

interface TaskExampleProps {
  title: string;
  description: string;
  tasks: TaskProps[];
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export function TaskExample({
  title,
  description,
  tasks,
  setTasks,
}: TaskExampleProps) {
  const { theme } = useTheme();

  function handleRemoveTask() {
    setTasks(tasks.filter((task) => task.title != title));
  }

  function handleEditTask() {
    const newTitle = prompt("Editar título da tarefa:", title);
    const newDescription = prompt("Editar descrição da tarefa:", description);
    if (newTitle && newDescription) {
      setTasks(
        tasks.map((task) =>
          task.title === title
            ? { ...task, title: newTitle, description: newDescription }
            : task
        )
      );
    }
  }

  function handleCheckTask() {
    const taskIndex = tasks.findIndex((task) => task.title === title);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
      setTasks(updatedTasks);
    }
  }

  return (
    <div
      className={
        (theme === "dark" ? "bg-black/80" : "bg-white") +
        " max-w-[400px] shadow-md rounded-lg p-4 mb-4 h-40 w-[400px]"
      }
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            className="border-1 rounded border-gray-300"
            checked={
              tasks.find((task) => task.title === title)?.completed || false
            }
            onChange={handleCheckTask}
          />
          <h3
            className={`font-bold ${
              tasks.find((task) => task.title === title)?.completed
                ? "line-through"
                : ""
            }`}
          >
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1 flex-row">
          <Button
            variants="ghost"
            onClick={() => {
              handleEditTask();
            }}
            size="small"
          >
            <FaRegEdit />
          </Button>
          <Button variants="ghost" onClick={handleRemoveTask} size="small">
            <FaRegTrashAlt />
          </Button>
        </div>
      </div>
      <div>
        <span className="text-gray-500 text-sm text-wrap break-words">
          {description}
        </span>
      </div>
    </div>
  );
}
