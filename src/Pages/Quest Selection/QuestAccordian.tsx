import React, { useEffect, useState } from "react";
import { fetchQuestList, questlist } from "./FetchQuestList";

interface AccordionItemProps {
  title: string;
  content?: string | null;
  onClick: (value: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  onClick,
}) => {
  return (
    <div className="DivQuestNameAccord">
      <button
        onClick={() => onClick(title)} // Emit the title on click
        className="QuestNameAccord"
      >
        {title}
      </button>

      {content && (
        <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC<{ onItemClick: (value: string) => void }> = ({
  onItemClick,
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
            onClick={(value) => onItemClick(value)} // Pass the clicked value up
          />
        ))
      ) : (
        <p>No quests available.</p>
      )}
    </div>
  );
};
