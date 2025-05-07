import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PTContainer({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`container mx-auto px-5 ${className}`}>{children}</div>
  );
}
