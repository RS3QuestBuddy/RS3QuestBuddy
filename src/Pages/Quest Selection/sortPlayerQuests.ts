import { useEffect, useRef } from "react";
import { start } from "repl";

export type PlayerQuestStatus = {
  title: string;
  status: "COMPLETED" | "NOT_STARTED" | "STARTED";
  difficulty: number;
  questPoints: number;
  userEligible: boolean;
};

export const useSortedPlayerQuests = () => {
  let completedPlayerQuests = useRef<PlayerQuestStatus[] | null>(null);
  let notStartedPlayerQuests = useRef<PlayerQuestStatus[] | null>(null);
  let startedPlayerQuests = useRef<PlayerQuestStatus[] | null>(null);
  let eligiblePlayerQuests = useRef<PlayerQuestStatus[] | null>(null);
  let notEligiblePlayerQuests = useRef<PlayerQuestStatus[] | null>(null);
  let alteredQuestData = useRef<PlayerQuestStatus[]>();

  const sortPlayerQuests = (questData: PlayerQuestStatus[] | null) => {
    if (Array.isArray(questData)) {
      const replacementMap = new Map<string, string>([
        ["Hermy and Bass", "That Old Black Magic: Hermy and Bass"],
        ["Flesh and Bone", "That Old Black Magic: Flesh and Bone"],
        ["Skelly by Everlight", "That Old Black Magic: Skelly by Everlight"],
        ["My One and Only Lute", "That Old Black Magic: My One and Only Lute"],
        ["Foreshadowing", "Once Upon a Time in Gielinor: Foreshadowing"],
        [
          "Defeating the Culinaromancer",
          "Recipe for Disaster: Defeating the Culinaromancer",
        ],
        ["Freeing Evil Dave", "Recipe for Disaster: Freeing Evil Dave"],
        ["Freeing King Awowogei", "Recipe for Disaster: Freeing King Awowogei"],
        ["Freeing Pirate Pete", "Recipe for Disaster: Freeing Pirate Pete"],
        [
          "Freeing Sir Amik Varze",
          "Recipe for Disaster: Freeing Sir Amik Varze",
        ],
        [
          "Freeing Skrach Uglogwee",
          "Recipe for Disaster: Freeing Skrach Uglogwee",
        ],
        [
          "Freeing the Goblin Generals",
          "Recipe for Disaster: Freeing the Goblin Generals",
        ],
        [
          "Freeing the Lumbridge Sage",
          "Recipe for Disaster: Freeing the Lumbridge Sage",
        ],
        [
          "Freeing the Mountain Dwarf",
          "Recipe for Disaster: Freeing the Mountain Dwarf",
        ],
        ["That Old Black Magic", ""],
        ["Unstable Foundations", ""],
        ["Once Upon a Time in Gielinor", ""],
        ["Recipe for Disaster", ""],
        ["Dimension of Disaster", ""],
        ["Finale", "Once Upon a Time in Gielinor: Finale"],
        ["flashback", "Once Upon a Time in Gielinor: Flashback"],
        ["Foreshadowing", "Once Upon a Time in Gielinor: Foreshadowing"],
        ["Fortunes", "Once Upon a Time in Gielinor: Fortunes"],
        ["Raksha, The Shadow Colossus", "Raksha, The Shadow Colossus Quest"],
        ["Helping Laniakea", "Helping Laniakea (miniquest)"],
        ["Father and Son", "Father and Son (miniquest)"],
        ["A Fairy Tale I - Growing Pains", "A Fairy Tale I: Growing Pains"],
        ["A Fairy Tale II - Cure a Queen", "A Fairy Tale II: Cure a Queen"],
        [
          "A Fairy Tale III - Battle at Ork's Rift",
          "A Fairy Tale III: Battle at Ork's Rift",
        ],
      ]);

      alteredQuestData.current = questData
        .map((quest) => {
          const newTitle = replacementMap.get(quest.title) ?? quest.title;
          return {
            ...quest,
            title: newTitle,
          };
        })
        .filter((quest) => quest.title !== "");
      console.log(alteredQuestData.current);
      completedPlayerQuests.current = alteredQuestData.current.filter(
        (quest) => quest.status === "COMPLETED"
      );
      notStartedPlayerQuests.current = alteredQuestData.current.filter(
        (quest) => quest.status === "NOT_STARTED"
      );
      console.log(notStartedPlayerQuests.current);
      startedPlayerQuests.current = alteredQuestData.current.filter(
        (quest) => quest.status === "STARTED"
      );
      eligiblePlayerQuests.current = alteredQuestData.current.filter(
        (quest) => (quest.userEligible = true)
      );
      notEligiblePlayerQuests.current = alteredQuestData.current.filter(
        (quest) => (quest.userEligible = false)
      );
    }
  };
  return {
    completedPlayerQuests,
    notStartedPlayerQuests,
    startedPlayerQuests,
    eligiblePlayerQuests,
    notEligiblePlayerQuests,
    sortPlayerQuests,
  };
};
