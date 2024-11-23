import React, { useEffect } from "react";
require("./../../Quest Data/QuestList.json");
type questlist = {
  questName: string[];
};

export const QuestFetcher: React.FC = () => {
  const questlist = "./QuestList.json";
  const FetchQuestList = async (): Promise<void> => {
    try {
      const response = await fetch(questlist);
      let questList: questlist = await response.json();

      console.log(questList);
      window.localStorage.setItem("questList", JSON.stringify(questList));
    } catch (error) {
      console.error("Was not able to fetch Quest List from Quests");
    }
  };
  useEffect(() => {
    FetchQuestList();
  }, []);
  return null;
};
