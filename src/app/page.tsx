"use client";

import { Dashboard } from "@/components/dashboard";
import Header from "@/components/header";
import { LoginForm } from "@/components/login-form";
import { TaskForm } from "@/components/taks-form";
import { TaskExample } from "@/components/task-example";
import { useAuth } from "@/context/AuthContext";
import { TaskProps } from "@/types/task";
import { useState } from "react";

export default function Home() {
  const { user } = useAuth();

  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      title: "Examplo da Tarefa",
      description:
        "Esta é uma tarefa de exemplo. Você pode marcar como concluída, editar ou excluir",
    },
  ]);

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
