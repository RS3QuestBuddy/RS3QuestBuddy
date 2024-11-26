import React from "react";
import { Accordion } from "./QuestAccordion";
import { useNavigate } from "react-router-dom";

export const QuestPick: React.FC = () => {
  const navigate = useNavigate();
  const handleItemClick = (value: string) => {
    navigate("/QuestDetails", { state: { questValue: value } });
  };
  return (
    <>
      <Accordion onClick={handleItemClick} />
    </>
  );
};
