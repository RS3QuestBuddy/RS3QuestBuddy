import { Accordion } from "./Data Fetchers/Components/QuestAccordian";
import { QuestFetcher } from "./Data Fetchers/FetchQuestList";
import { ColorPicker } from "./Data Fetchers/Components/ColorWheel";
import { useState } from "react";
export const QuestPick: React.FC = () => {
  let initialFetch = false;
  let questListUpdated = false;
  const [outputColors, setOutputColors] = useState<string>("");

  const handleColorChange = (colors: string) => {
    setOutputColors(colors); // Update the parent state with saved colors
  };
  console.log(outputColors);
  return (
    <>
      <QuestFetcher />
      <ColorPicker onChange={handleColorChange} />
      <Accordion />
    </>
  );
};
