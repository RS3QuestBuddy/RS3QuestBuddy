import React, { useEffect, useState } from "react";
import { questlist } from "./FetchQuestList";

type AccordionItemProps = {
  title: string | null;
  content: string | null;
  onClick?: (title: string | null) => void; // Add optional onClick prop
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    if (onClick) {
      onClick(title); // Trigger the callback when toggled
    }
  };

  return (
    <div className="DivQuestNameAccord">
      <button onClick={toggleAccordion} className="QuestNameAccord">
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
  onClick?: (title: string | null) => void; // Add optional onClick prop for Accordion
};

export const Accordion: React.FC<AccordionProps> = ({ onClick }) => {
  const [questList, setQuestList] = useState<questlist | null>(null); // Ensure initial state is null
  const [isClickActive, setIsClickActive] = useState(false);

  useEffect(() => {
    const jQuestList = window.localStorage.getItem("questList");
    if (jQuestList !== null) {
      const parsedList: questlist = JSON.parse(jQuestList);
      setQuestList(parsedList);
      setIsClickActive(true);
    } else {
      setIsClickActive(false);
    }
  }, [isClickActive]);

  return (
    <div>
      {questList?.quests?.length ? (
        questList.quests.map((item, index) => (
          <AccordionItem
            key={index}
            title={item}
            content={null} // Set content appropriately
            onClick={isClickActive ? onClick : undefined} // Use undefined instead of null
          />
        ))
      ) : (
        <p>No quests available.</p> // Handle empty or undefined state
      )}
    </div>
  );
};
