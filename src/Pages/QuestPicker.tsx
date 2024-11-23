import { Accordion } from "./Data Fetchers/Components/QuestAccordian";
import { QuestFetcher } from "./Data Fetchers/FetchQuestList";
import { ColorPicker } from "./Data Fetchers/Components/ColorWheel";
import { useState } from "react";
export const QuestPick: React.FC = () => {
  return (
    <>
      <QuestFetcher />
      <input className="QuestSearchBar"></input>
      <Accordion />
    </>
  );
};
