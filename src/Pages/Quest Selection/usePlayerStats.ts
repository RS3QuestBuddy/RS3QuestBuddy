import { useState } from "react";

export const useFetchPlayerInfo = () => {
  const [playerStats, setPlayerStats] = useState<string>("null");
  const [playerQuests, setPlayerQuests] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const PlayerQuestSite =
    "https://corsproxy.io/?" +
    encodeURIComponent("https://apps.runescape.com/runemetrics/quests");
  const PlayerStatsSite =
    "https://corsproxy.io/?" +
    encodeURIComponent(
      "https://secure.runescape.com/m=hiscore/index_lite.ws?player="
    );
  const fetchPlayerStats = async (playerName: String): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(PlayerStatsSite + `${playerName}`);
      const playerInfo = await response.text();
      console.log(playerInfo);
      setPlayerStats(playerInfo);
      setHasError(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Was not able to fetch player stats", error);
      setIsLoading(false);
      setHasError(true);
    }
  };
  const fetchPlayerQuests = async (playerName: String): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(PlayerQuestSite + `?user=${playerName}`);
      const playerIQuests: string[] = await response.json();
      setPlayerQuests(playerIQuests);
      console.log(playerIQuests);
      setHasError(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Was not able to fetch Quest from RuneMetrics:", error);
      setIsLoading(false);
      setHasError(true);
    }
  };
  return {
    playerStats,
    playerQuests,
    fetchPlayerStats,
    fetchPlayerQuests,
    isLoading,
    hasError,
  } as const;
};
