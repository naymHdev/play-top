import React from "react";

interface PTButtonProps {
  label: string;
  icon?: React.ReactNode;
  className?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PTButton: React.FC<PTButtonProps> = ({
  label,
  icon,
  className,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} mt-8 flex items-center gap-3 text-primary text-[16px] font-medium rounded-full hover:cursor-pointer`}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};

export default PTButton;
