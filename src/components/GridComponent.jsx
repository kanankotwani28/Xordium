import React from "react";

export default function GridComponent({
  color = "rgba(168,85,247,0.15)", // default purple glow
  thickness = "2px",
  spacing = "80px",
  opacity = "0.4",
  animate = true,
}) {
  return (
    <>
      <div
        className={`absolute inset-0 pointer-events-none ${
          animate ? "animate-slow-pan" : ""
        }`}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${color} ${thickness}, transparent ${thickness}),
            linear-gradient(to bottom, ${color} ${thickness}, transparent ${thickness})
          `,
          backgroundSize: `${spacing} ${spacing}`,
          opacity: opacity,
        }}
      />
      <style>{`
        @keyframes slow-pan {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 100px 100px, 100px 100px;
          }
        }
        .animate-slow-pan {
          animation: slow-pan 40s linear infinite;
        }
      `}</style>
    </>
  );
}
