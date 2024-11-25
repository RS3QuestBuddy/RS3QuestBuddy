import React, { useEffect, useState } from "react";
import { Accordion } from "./QuestAccordian";
import { QuestFetcher } from "./FetchQuestList";

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
