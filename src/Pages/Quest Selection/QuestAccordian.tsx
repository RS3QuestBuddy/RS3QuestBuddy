import React, { useEffect, useState } from "react";
import { fetchQuestList, questlist } from "./FetchQuestList";
import { AccordionItem } from "./AccordionItem";

export interface AccordionProps {
  onClick: (value: string) => void;
};

export const Accordion: React.FC<AccordionProps> = ({
  onClick,
}) => {
  const [questList, setQuestList] = useState<questlist | null>(null);

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
      {questList?.quests?.length ? (
        questList.quests.map((item, index) => (
          <AccordionItem
            key={index}
            title={item}
            content={null}
            onClick={onClick} // Pass the clicked value up
          />
        ))
      ) : (
        <p>No quests available.</p>
      )}
    </div>
  );
};
