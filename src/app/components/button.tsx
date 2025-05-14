"use client";

import { useTheme } from "../context/ThemeContext";

interface ButtonProps {
  onClick?: () => void;
  variants?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  onClick,
  variants = "primary",
  size = "medium",
  disabled = false,
  children,
  className,
  type,
}: ButtonProps) {
  const { theme } = useTheme();

  const baseStyles =
    "flex items-center justify-center gap-2 px-4 py-2 rounded hover:cursor-pointer";
  const variantStyles =
    variants === "primary"
      ? "bg-[#171717] text-white"
      : variants === "secondary"
      ? "bg-gray-200 text-black"
      : "bg-transparent text-black";

  const sizeStyles =
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base";
  const childrenStyles =
    theme === "dark" && variants !== "secondary" ? "text-white" : "text-black";

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${childrenStyles} hover:opacity-80 ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
