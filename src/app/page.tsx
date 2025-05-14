"use client";

import { useEffect, useState } from "react";
import { Dashboard } from "./components/dashboard";
import Header from "./components/header";
import { LoginForm } from "./components/login-form";
import { useAuth } from "./context/AuthContext";
import { TaskProps } from "./types/task";

export default function Home() {
  const { user } = useAuth();

  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      title: "Examplo da Tarefa",
      description:
        "Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir",
      completed: false,
    },
  ]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-4">
      <div className="max-w-[900px] h-auto w-[900px]">
        {user.name ? (
          <>
            <Header />
            <Dashboard user={user} tasks={tasks} setTasks={setTasks} />
          </>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
}
