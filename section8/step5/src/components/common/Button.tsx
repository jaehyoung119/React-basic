import React from "react";

interface ButtonProps {
  variant?: "primary" | "danger" | "outline";
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
