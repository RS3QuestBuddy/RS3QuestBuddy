import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="AccordionContainer">
      <button onClick={toggleOpen} className="AccordionItem">
        {title}
      </button>
      {isOpen && (
        <div className="AccordionContentContainer">
          <div className="AccordionContent">{content}</div>
        </div>
      )}
    </div>
  );
};

interface SettingsAccordionProps {
  settingsSections: Array<{
    title: string;
    content: React.ReactNode;
  }>;
}

const SettingsAccordion: React.FC<SettingsAccordionProps> = ({
  settingsSections,
}) => {
  return (
    <div className="SettingsAccordion">
      {settingsSections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
};

export default SettingsAccordion;
