import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./button";

interface LoginFormProps {
  name: string;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormProps>();
  const { theme } = useTheme();
  const { login } = useAuth();

  function onSubmit(data: LoginFormProps) {
    const { name } = data;
    if (name) login(name);
    reset();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-inherit">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome"
          className="p-2 border border-gray-300 rounded"
          {...register("name", { required: "Nome é obrigatório" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <Button
          variants={theme === "dark" ? "secondary" : "primary"}
          type="submit"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}
