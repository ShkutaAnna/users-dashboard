import type { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  active?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  icon,
  variant = "primary",
  active = false,
  onClick,
}: ButtonProps) {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 ${styles[variant]}`}
    >
      {icon}
      {active ? 'hh' : ''}
      {children ? `<span>${children}</span>` : ''}
    </button>
  );
}