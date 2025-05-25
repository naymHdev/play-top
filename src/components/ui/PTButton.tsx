import React from "react";

interface PTButtonProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const PTButton: React.FC<PTButtonProps> = ({
  label,
  icon,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${className} flex items-center gap-3 text-primary text-[16px] font-medium rounded-full hover:cursor-pointer`}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};

export default PTButton;
