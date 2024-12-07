import { useRef, useState } from "react";
import { PlayerQuestStatus } from "./sortPlayerQuests";

export const useFetchPlayerInfo = () => {
  let playerQuests = useRef<PlayerQuestStatus[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const PlayerQuestSite =
    "https://corsproxy.io/?url=https://apps.runescape.com/runemetrics/quests";

  const fetchPlayerQuests = async (playerName: String): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(PlayerQuestSite + `?user=${playerName}`);
      const data = await response.json();
      playerQuests.current = data.quests;
      localStorage.setItem("playerName", playerName.toString());
      setHasError(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Was not able to fetch Quest from RuneMetrics:", error);
      setIsLoading(false);
      setHasError(true);
    }
  };
  return {
    playerQuests,
    fetchPlayerQuests,
    isLoading,
    hasError,
  } as const;
};
