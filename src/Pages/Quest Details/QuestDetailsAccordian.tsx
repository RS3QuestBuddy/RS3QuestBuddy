import { useEffect, useState } from "react";
import { fetchQuestDetails, QuestDetailsType } from "./fetchQuestDetails";

interface AccordionItemProps {
  title: string;
  content: string | string[];
}

interface QuestDetailsAccordionProps {
  selectedQuest: string; // The value passed from the parent component
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <button
        onClick={toggleOpen}
        style={{
          width: "100%",
          padding: "10px",
          background: "#f5f5f5",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          fontSize: "16px",
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

const QuestDetailsAccordion: React.FC<QuestDetailsAccordionProps> = ({
  selectedQuest,
}) => {
  // State should always be an array of quests
  const [questDetails, setQuestDetails] = useState<QuestDetailsType[]>([]); // Array of quests

  useEffect(() => {
    const loadQuestDetails = async () => {
      const details = await fetchQuestDetails();

      // Check if the result is a single object, wrap it in an array if so
      if (Array.isArray(details)) {
        setQuestDetails(details);
      }
    };

    loadQuestDetails();
  }, []);

  // Filter the quests based on the selectedQuest value (only if the quest name is defined)
  const filteredItems =
    questDetails?.filter((quest) => quest?.Quest?.startsWith(selectedQuest)) ||
    [];

  return (
    <>
      <div>
        {filteredItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={"Requirement's"}
            content={item.Requirements}
          />
        ))}
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={"Start Point"}
            content={item.StartPoint}
          />
        ))}
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={"Is This a Members Quest?"}
            content={item.MemberRequirement}
          />
        ))}
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={"How Long is This Quest?"}
            content={item.OfficialLength}
          />
        ))}
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={"Items You Definitely Need!"}
            content={item.ItemsRequired}
          />
        ))}
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={"Items You Might Need?"}
            content={item.Recommended}
          />
        ))}
      </div>
      <div>
        {filteredItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={"Enemies To Look Out For!"}
            content={item.EnemiesToDefeat}
          />
        ))}
      </div>
    </>
  );
};

export default QuestDetailsAccordion;
