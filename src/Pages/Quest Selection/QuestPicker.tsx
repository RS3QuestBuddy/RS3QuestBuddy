import React, { useEffect, useRef, useState } from "react";
import { Accordion } from "./QuestAccordian";
import { useNavigate } from "react-router-dom";
import { Button } from "./../Shared Components/Button";
import { useFetchPlayerInfo } from "./usePlayerQuests";
import { CircularProgress } from "./../Shared Components/LoadingComponent";
import { usePlayerSortStats } from "../Quest Details/PlayerStatsSort";
import { useSortedPlayerQuests } from "./sortPlayerQuests";
import SettingsModal from "./../Settings/Settings";
export const QuestPick: React.FC = () => {
  const navigate = useNavigate();
  const [playerFound, setPlayerFound] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const { playerQuests, fetchPlayerQuests, isLoading } = useFetchPlayerInfo();
  const {
    completedPlayerQuests,
    notStartedPlayerQuests,
    startedPlayerQuests,
    eligiblePlayerQuests,
    notEligiblePlayerQuests,
    sortPlayerQuests,
  } = useSortedPlayerQuests();
  const { sortedPlayerStats, filterPlayerStats } = usePlayerSortStats();
  const handleItemClick = (value: string) => {
    navigate("/QuestDetails", { state: { questValue: value } });
  };
  const [searchQuery, setSearchQuery] = useState<string>("");
  let sort = useRef<boolean>(false);
  if (searchQuery.length > 0) {
    sort.current = true;
  }

  const handlePlayerSearch = async (playerSearch: string) => {
    if (isLoading) return; // Prevent multiple fetches
    if (playerSearch.length <= 0) return;
    await fetchPlayerQuests(playerSearch);
    if (playerQuests.current !== null) {
      sortPlayerQuests(playerQuests.current);
      console.log(completedPlayerQuests.current);
    }
  };

  useEffect(() => {
    if (playerQuests !== null) {
      setPlayerFound(true);
    }
  }, [playerQuests]);
  return (
    <>
      <div className="InputGroup">
        <div className="SearchPlayerInputContainer">
          <p className="SearchPlayerLabel">Search Player</p>
          {isLoading && (
            <CircularProgress
              size={20}
              color="#bf3651"
              className="InputSpinner"
            />
          )}

          <input
            className="SearchPlayerInput"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePlayerSearch(e.currentTarget.value);
              }
            }}
            placeholder="Player Name Here"
            style={{
              color: !playerFound ? "#007bff" : "#38b070", // Change text color dynamically
            }}
          />
        </div>
        <div className="SearchQuestInputContainer">
          <p className="SearchQuestLabel">Search Quest</p>
          <input
            className="SearchQuestInput"
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
          />
        </div>
      </div>
      <div className="ButtonGroup">
        <Button
          label="Search Player"
          divClassName="ButtonRootDivContainer"
          className="ButtonRoot"
          disabled={isLoading}
        />
        <Button
          label="Sort Out Completed Quests"
          divClassName="ButtonRootDivContainer"
          className="ButtonRoot"
        />
      </div>
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <SettingsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div className="AccordionParentDiv">
        <Accordion
          onClick={handleItemClick}
          searchQuery={searchQuery}
          sorted={sort.current}
        />
      </div>
    </>
  );
};
