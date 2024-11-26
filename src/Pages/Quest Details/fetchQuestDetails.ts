export type QuestDetailsType = {
  Quest: string;
  StartPoint: string;
  EnemiesToDefeat: string[];
  Requirements: string[];
  MemberRequirement: string;
  ItemsRequired: string[];
  OfficialLength: string;
  Recommended: string[];
};
const questDetailPath = "./../../Quest Data/QuestDetails.json";

export const fetchQuestDetails = async (): Promise<QuestDetailsType | null> => {
  try {
    const response = await fetch(questDetailPath);
    const questDetails: QuestDetailsType = await response.json();
    return questDetails;
  } catch (error) {
    console.error("Was not able to fetch Quest List from Quests:", error);
    return null;
  }
};
