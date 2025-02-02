import React from "react";

export default function CustomButton({
  className,
  label,
  icon,
  onClick,
  isLoading = false,
  disabled = false,
}) {
  return (
    <button
      className={`${className} flex items-center justify-center`}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {isLoading ? "Loading..." : icon ? <span>{icon}</span> : label}
    </button>
  );
}
