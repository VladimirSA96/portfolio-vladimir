import React from "react";
import "./FloatingBackground.css";

const FloatingBackground = () => {
  // Elementos que flotarán (puedes personalizarlos)
  const elements = [
    { id: 1, content: "</>", delay: 0, duration: 8, size: "large", left: "5%" },
    {
      id: 2,
      content: "{}",
      delay: 2,
      duration: 10,
      size: "large",
      left: "15%",
    },
    {
      id: 3,
      content: "()",
      delay: 4,
      duration: 9,
      size: "medium",
      left: "80%",
    },
    {
      id: 4,
      content: "[]",
      delay: 1,
      duration: 11,
      size: "medium",
      left: "90%",
    },
    {
      id: 5,
      content: "<>",
      delay: 3,
      duration: 7,
      size: "medium",
      left: "45%",
    },
    {
      id: 6,
      content: "{}",
      delay: 5,
      duration: 12,
      size: "large",
      left: "70%",
    },
    {
      id: 7,
      content: "JS",
      delay: 2,
      duration: 9,
      size: "medium",
      left: "30%",
    },
    {
      id: 8,
      content: "⚛",
      delay: 0,
      duration: 10,
      size: "medium",
      left: "85%",
    },
    {
      id: 9,
      content: "⚡",
      delay: 4,
      duration: 8,
      size: "medium",
      left: "10%",
    },
    {
      id: 10,
      content: "🚀",
      delay: 3,
      duration: 11,
      size: "small",
      left: "55%",
    },
    {
      id: 11,
      content: "HTML",
      delay: 1,
      duration: 10,
      size: "small",
      left: "25%",
    },
    {
      id: 12,
      content: "CSS",
      delay: 6,
      duration: 9,
      size: "small",
      left: "65%",
    },
    {
      id: 13,
      content: "React",
      delay: 2,
      duration: 12,
      size: "medium",
      left: "40%",
    },
    {
      id: 14,
      content: "</>",
      delay: 5,
      duration: 8,
      size: "small",
      left: "75%",
    },
    {
      id: 15,
      content: "Node",
      delay: 0,
      duration: 10,
      size: "small",
      left: "60%",
    },
  ];

  return (
    <div className="floating-background">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`floating-element ${el.size}`}
          style={{
            left: el.left,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {el.content}
        </div>
      ))}
    </div>
  );
};

export default FloatingBackground;
