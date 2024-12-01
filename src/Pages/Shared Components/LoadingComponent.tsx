import React from "react";

interface CircularProgressProps {
  size?: number; // Size of the spinner in pixels
  color?: string; // Color of the spinner
  className?: string;
  colorComplete?: boolean;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 40,
  color = "#3498db",
  className,
}) => {
  return (
    <div className={`circular-progress-wrapper ${className || ""}`}>
      <div
        className="circular-progress"
        style={{
          width: size,
          height: size,
          borderColor: `${color} transparent transparent transparent`,
        }}
      ></div>
    </div>
  );
};
