import React from "react";
interface SettingsAccordionProps {
    settingsSections: Array<{
        title: string;
        content: React.ReactNode;
    }>;
}
declare const SettingsAccordion: React.FC<SettingsAccordionProps>;
export default SettingsAccordion;
