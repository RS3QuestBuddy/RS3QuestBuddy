import React, { useEffect, useState } from "react";
import { useFetchQuestList } from "./useFetchQuestList";

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
  const { questList, fetchQuest, isLoading, hasError } = useFetchQuestList();

  useEffect(() => {
    fetchQuest();
  }, [])

  if (isLoading) {
    // show loading animation by returning loading component here.
    // TODO: Find loading component from UI library or create one from scratch
    <div className='accordion-loading'>Loading...</div>;
  }

  if (hasError) {
    return <div className='accordion-error'>An error occured while fetching the list of quest.</div>;
  }

  return (
    <div>
      {questList?.length ? (
        questList.map((item, index) => (
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
