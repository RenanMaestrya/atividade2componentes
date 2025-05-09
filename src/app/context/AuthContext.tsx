"use client";

import { User } from "@/types/user";
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  user: User;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({ name: "" });

  const login = (name: string) => setUser({ name });
  const logout = () => setUser({ name: "" });

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
