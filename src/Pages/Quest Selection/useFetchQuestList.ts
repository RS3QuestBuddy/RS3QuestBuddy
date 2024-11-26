import { useState } from "react";

const questlistPath = "./../../Quest Data/QuestList.json";

export const useFetchQuestList = () => {

  const [questList, setQuestList] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchQuest = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(questlistPath);
      const listOfQuest: string[]  = await response.json();
      setQuestList(listOfQuest);
      setHasError(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Was not able to fetch Quest List from Quests:", error);
      setIsLoading(false);
      setHasError(true);
    }
  };

  return { questList, fetchQuest, isLoading, hasError } as const;
};
