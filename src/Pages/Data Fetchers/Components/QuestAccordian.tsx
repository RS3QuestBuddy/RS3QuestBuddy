import React, { useEffect, useState } from "react";
import { questlist } from "./../FetchQuestList";

type AccordionItemProps = {
  title: string;
  content: string | null;
  onClick?: (title: string) => void; // Add optional onClick prop
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  if (onClick) {
    onClick(title);
  }
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
      {isOpen && content && (
        <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

type AccordionProps = {
  onClick?: (title: string) => void; // Add optional onClick prop for Accordion
};

export const Accordion: React.FC<AccordionProps> = ({ onClick }) => {
  const [questList, setQuestList] = useState<questlist | null>(null); // Ensure initial state is null

  useEffect(() => {
    const jQuestList = window.localStorage.getItem("questList");
    if (jQuestList !== null) {
      const parsedList: questlist = JSON.parse(jQuestList);
      setQuestList(parsedList);
    }
  }, []);

  return (
    <div>
      {questList?.quests?.length ? (
        questList.quests.map((item, index) => (
          <AccordionItem
            key={index}
            title={item}
            content={null} // Set content appropriately
            onClick={onClick} // Pass onClick down to each AccordionItem
          />
        ))
      ) : (
        <p>No quests available.</p> // Handle empty or undefined state
      )}
    </div>
  );
};
