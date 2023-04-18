import React, { useRef, useState } from "react";

const SignatureForm = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    convertToImage();
  };

  const convertToImage = () => {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL("image/png"); // Convert canvas to image data URL
    // Submit the form data, including the data URL, to the server
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="300"
        height="150"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        style={{ background: "white" }}
      />
      {/* Include other form fields as needed */}
      <button type="submit">Submit Form</button>
    </div>
  );
};

export default SignatureForm;
