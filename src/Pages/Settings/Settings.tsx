import React, { useState } from "react";
import SettingsAccordion from "./SettingsAccordion";
import { useSettingOptions } from "./SettingOptions";

// SettingsModal Component
const SettingsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { settingsSections } = useSettingOptions();
  return (
    <div
      className={`settings-modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <div
        className={`settings-modal ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <SettingsAccordion settingsSections={settingsSections} />
      </div>
    </div>
  );
};

export default SettingsModal;
