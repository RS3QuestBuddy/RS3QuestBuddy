import React, { useRef, useState, useEffect } from "react";

type ColorPickerProps = {
  onChange?: (colors: string) => void; // Callback to return saved colors
};

export const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#000000"); // Default to black
  const [pointerPosition, setPointerPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [savedColors, setSavedColors] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const maxColors = 5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (ctx) {
        // Create a horizontal gradient for the hue
        const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient1.addColorStop(0, "red");
        gradient1.addColorStop(0.17, "yellow");
        gradient1.addColorStop(0.34, "lime");
        gradient1.addColorStop(0.51, "cyan");
        gradient1.addColorStop(0.68, "blue");
        gradient1.addColorStop(0.85, "magenta");
        gradient1.addColorStop(1, "red");

        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create a vertical gradient for saturation and lightness
        const gradient2 = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient2.addColorStop(0, "rgba(255,255,255,1)");
        gradient2.addColorStop(0.5, "rgba(255,255,255,0)");
        gradient2.addColorStop(0.5, "rgba(0,0,0,0)");
        gradient2.addColorStop(1, "rgba(0,0,0,1)");

        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set the initial position and color to black at the bottom center of the canvas
        setPointerPosition({ x: canvas.width / 2, y: canvas.height });
        const initialColor = getColorAtPosition(
          ctx,
          canvas.width / 2,
          canvas.height
        );
        setSelectedColor(initialColor);
      }
    }
  }, []);

  const getColorAtPosition = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
  ): string => {
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return; // Only update color when dragging

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      const color = getColorAtPosition(ctx, x, y);
      setSelectedColor(color);
      setPointerPosition({ x, y });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);

    // Select color immediately on mouse down
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      const color = getColorAtPosition(ctx, x, y);
      setSelectedColor(color);
      setPointerPosition({ x, y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Save color when mouse is released
    if (savedColors.length === maxColors) {
      savedColors.reverse();
      savedColors.pop();
      savedColors.reverse();
    }
    if (
      savedColors.length < maxColors &&
      !savedColors.includes(selectedColor)
    ) {
      const updatedColors = [...savedColors, selectedColor];
      setSavedColors(updatedColors);
      if (onChange) {
        onChange(selectedColor);
      }
    }
  };

  return (
    <div style={{ padding: "1.25em" }}>
      <div style={{ position: "relative" }}>
        <canvas
          ref={canvasRef}
          width={100}
          height={100}
          style={{ border: "0.003em solid #000", borderRadius: "0.5em" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Stops dragging when the cursor leaves the canvas
        />
        <div
          style={{
            width: "2em",
            height: "2em",
            backgroundColor: selectedColor,
            border: "0.005em solid #000",
            borderRadius: "0.3em",
            marginBottom: "0.5em",
          }}
        />
        {pointerPosition && (
          <div
            style={{
              position: "absolute",
              top: ` ${pointerPosition.y - 5}px`,
              left: pointerPosition.x - 5,
              width: ".625em",
              height: ".625em",
              border: ".125em solid #fff",
              backgroundColor: selectedColor,
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      <hr style={{ width: "75%" }} />

      {/* Display saved colors */}
      <div style={{ marginTop: ".5em" }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap", // Enables wrapping behavior
            justifyContent: "flex-start", // Aligns items at the start of the row
          }}
        >
          {savedColors.map((color, index) => (
            <div
              key={index}
              style={{
                width: "2em",
                height: "2em",
                backgroundColor: color,
                border: "1px solid #000",
                borderRadius: "0.3em",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
