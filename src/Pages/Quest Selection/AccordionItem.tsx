export interface AccordionItemProps {
  title: string;
  content?: string | null;
  onClick: (value: string) => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  onClick,
}) => {
  return (
    <div className="DivQuestNameAccord">
      <button
        onClick={() => onClick(title)} // Emit the title on click
        className="QuestNameAccord"
      >
        {title}
      </button>

      {content && (
        <div style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
