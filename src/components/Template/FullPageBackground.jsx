import React from "react";

const FullPageBackground = ({ children, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor || "white", // Update to the desired background color
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      {children}
    </div>
  );
};

export default FullPageBackground;
