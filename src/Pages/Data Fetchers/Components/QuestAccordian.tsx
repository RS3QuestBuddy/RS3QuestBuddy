import React, { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        marginBottom: "1em",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <button
        onClick={toggleAccordion}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: isOpen ? "#ddd" : "#f9f9f9",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {title}
      </button>
      {isOpen && (
        <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is JSX?",
      content:
        "JSX is a syntax extension for JavaScript, used with React to describe UI.",
    },
    {
      title: "What is a Hook?",
      content:
        "Hooks are functions that let you use state and lifecycle features in React.",
    },
  ];

  return (
    <div>
      <h1>FAQ</h1>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};
