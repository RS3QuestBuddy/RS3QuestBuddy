import React, { useRef, useState } from "react";
import { Accordion } from "./QuestAccordian";
import { useNavigate } from "react-router-dom";
import { Button } from "./../Shared Components/Button";
export const QuestPick: React.FC = () => {
  const navigate = useNavigate();
  const handleItemClick = (value: string) => {
    navigate("/QuestDetails", { state: { questValue: value } });
  };
  const [searchQuery, setSearchQuery] = useState<string>("");
  let sort = useRef<boolean>(false);
  const TestOnClicks = () => {
    console.log("Hello");
  };
  if (searchQuery.length > 0) {
    sort.current = true;
  }
  return (
    <>
      <div className="InputGroup">
        <div className="SearchPlayerInputContainer">
          <p className="SearchPlayerLabel">Search Player</p>
          <input className="SearchPlayerInput" />
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
          onClick={TestOnClicks}
          divClassName="ButtonRootDivContainer"
          className="ButtonRoot"
        />
        <Button
          label="Sort Out Completed Quests"
          divClassName="ButtonRootDivContainer"
          className="ButtonRoot"
          onClick={TestOnClicks}
        />
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
