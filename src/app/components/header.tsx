"use client";

import { GiSunrise, GiSunset } from "react-icons/gi";

import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./button";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const { logout, user } = useAuth();

  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Tarefas</h1>
      <div className="flex items-center gap-4">
        <Button variants="secondary" onClick={toggleTheme}>
          {theme === "light" ? <GiSunset /> : <GiSunrise />}
        </Button>
        {user.name && (
          <Button
            variants={theme === "light" ? "ghost" : "secondary"}
            onClick={logout}
          >
            sair
          </Button>
        )}
      </div>
    </header>
  );
}
