"use client";

import { GoSun } from "react-icons/go";
import { MdDarkMode } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./button";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const { logout, user } = useAuth();

  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Criar tarefas</h1>
      <div className="flex items-center gap-4">
        {user.name && (
          <Button
            variants={theme === "light" ? "ghost" : "secondary"}
            onClick={logout}
          >
            sair
          </Button>
        )}
        <Button variants="secondary" onClick={toggleTheme}>
          {theme === "light" ? <MdDarkMode /> : <GoSun />}
        </Button>
      </div>
    </header>
  );
}
