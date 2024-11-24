import { Accordion } from "./Components/QuestAccordian";
import { QuestFetcher } from "./Data Fetchers/FetchQuestList";

export const QuestPick: React.FC = () => {
  const handleFunction = () => {
    console.log("Hello");
  };
  return (
    <>
      <QuestFetcher />
      <Accordion onClick={handleFunction} />
    </>
  );
};
