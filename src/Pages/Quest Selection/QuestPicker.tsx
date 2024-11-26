import React from "react";
import { Accordion } from "./QuestAccordian";
import { useNavigate } from "react-router-dom";

export const QuestPick: React.FC = () => {
  const navigate = useNavigate();
  const handleItemClick = (value: string) => {
    navigate("/QuestDetails", { state: { questValue: value } });
  };
  return (
    <>
      <Accordion onItemClick={handleItemClick} />
    </>
  );
};
