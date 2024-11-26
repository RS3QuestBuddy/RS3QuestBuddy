import { useLocation, useNavigate } from "react-router-dom";
import QuestDetailsAccordion from "./QuestDetailsAccordian";

export const QuestDetails: React.FC = () => {
  const location = useLocation();
  const { questValue } = location.state || {};
  const hist = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          hist("/");
        }}
      >
        Go Back
      </button>
      <QuestDetailsAccordion selectedQuest={questValue} />
    </>
  );
};
