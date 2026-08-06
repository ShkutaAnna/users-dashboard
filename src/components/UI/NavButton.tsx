import type { ReactNode } from "react";

type ButtonProps = {
  classes?: string;
  children?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
};

export default function NavButton({
  classes,
  children,
  icon,
  active = false,
  collapsed=true,
  onClick,
}: ButtonProps) {
  const styles = {
    active: 'text-brand-800 bg-brand-100 hover:bg-brand-100',
    default: 'text-gray-600 bg-white hover:bg-brand-100',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-md py-2 cursor-pointer ${collapsed ? 'px-2' : 'px-4'} ${active ? styles['active'] : styles['default']} ${classes}`}
    >
      <span className="flex gap-2 items-center">
        {icon}
        {collapsed ? '' : children}
      </span>
    </button>
  );
}