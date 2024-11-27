import React, { useEffect, useState } from "react";
import { fetchQuestList, questlist } from "./FetchQuestList";

interface AccordionItemProps {
  title: string;
  onClick: (value: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, onClick }) => {
  return (
    <div className="AccordionContainer">
      <button
        onClick={() => onClick(title)} // Emit the title on click
        className="AccordionItem"
      >
        {title}
      </button>
    </div>
  );
};

export const Accordion: React.FC<{
  onClick: (value: string) => void;
  searchQuery?: string;
  sorted?: boolean;
}> = ({ onClick, searchQuery, sorted }) => {
  const [questList, setQuestList] = useState<questlist | null>(null);
  const filteredQuests = questList?.quests.filter((quest) =>
    quest.toLowerCase().includes(searchQuery?.toLowerCase() ?? "")
  );
  useEffect(() => {
    const loadQuestList = async () => {
      const ql = await fetchQuestList();
      if (ql) {
        setQuestList(ql);
      }
    };

    loadQuestList();
  }, []);

  return (
    <div>
      {!sorted && questList?.quests?.length
        ? questList.quests.map((item, index) => (
            <AccordionItem
              key={index}
              title={item}
              onClick={(value) => onClick(value)} // Pass the clicked value up
            />
          ))
        : filteredQuests?.map((item, index) => (
            <AccordionItem
              key={index}
              title={item}
              onClick={(value) => onClick(value)} // Pass the clicked value up
            />
          ))}
    </div>
  );
};
