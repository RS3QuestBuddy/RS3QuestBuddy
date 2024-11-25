import React, { useEffect } from "react";

export type questlist = {
  quests: string[];
};

type QuestFetcherProps = {
  onFetchComplete?: (fetched: boolean) => void; // Optional callback to notify fetch status
};

export const QuestFetcher: React.FC<QuestFetcherProps> = ({
  onFetchComplete,
}) => {
  const questlistPath = "./../../Quest Data/QuestList.json";

  const fetchQuestList = async (): Promise<void> => {
    try {
      const response = await fetch(questlistPath);
      const questList: questlist = await response.json();
      window.localStorage.setItem("questList", JSON.stringify(questList));
      console.log("Quest list fetched and stored in localStorage.");
      if (onFetchComplete) {
        onFetchComplete(true);
      }
      window.location.reload();
    } catch (error) {
      console.error("Was not able to fetch Quest List from Quests:", error);
      if (onFetchComplete) {
        onFetchComplete(false);
      }
    }
  };

  useEffect(() => {
    const storedQuestList = window.localStorage.getItem("questList");
    if (!storedQuestList) {
      console.log("No quest list found in localStorage. Fetching...");
      fetchQuestList();
    } else {
      console.log("Quest list found in localStorage. Skipping fetch.");
      if (onFetchComplete) {
        onFetchComplete(true);
      }
    }
  }, []);

  return null;
};
