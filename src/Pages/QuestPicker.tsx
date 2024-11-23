import { Accordion } from "./Data Fetchers/Components/QuestAccordian";
import { QuestFetcher } from "./Data Fetchers/FetchQuestList";
import { ColorPicker } from "./Data Fetchers/Components/ColorWheel";
export const QuestPick: React.FC = () => {
  let initialFetch = false;
  let questListUpdated = false;
  let color = [""];
  const callColor = () => {
    return console.log(color);
  };
  return (
    <>
      <QuestFetcher />
      <ColorPicker onChange={callColor} />
      <Accordion />
    </>
  );
};
