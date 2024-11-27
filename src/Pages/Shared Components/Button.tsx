import React from "react";

interface ButtonInterface {
  onClick?: () => void;
  label?: string;
  className?: string;
  divClassName?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonInterface> = ({
  onClick,
  label = "Click me",
  className = "",
  divClassName = "",
  disabled = false,
}) => {
  return (
    <div className={divClassName}>
      <button className={className} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};
