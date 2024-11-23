import React, { useEffect, useState } from "react";
import { questlist } from "../FetchQuestList";
type AccordionItemProps = {
  title: string;
  content: string | null;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (content === null) {
      return null;
    } else {
      setIsOpen(!isOpen);
    }
  };

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

export const Accordion: React.FC = () => {
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
          <AccordionItem key={index} title={item} content={null} />
        ))
      ) : (
        <p>No quests available.</p> // Handle empty or undefined state
      )}
    </div>
  );
};
