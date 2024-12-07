export type PlayerQuestStatus = {
    title: string;
    status: "COMPLETED" | "NOT_STARTED" | "STARTED";
    difficulty: number;
    questPoints: number;
    userEligible: boolean;
};
export declare const useSortedPlayerQuests: () => {
    completedPlayerQuests: import("react").MutableRefObject<PlayerQuestStatus[] | null>;
    notStartedPlayerQuests: import("react").MutableRefObject<PlayerQuestStatus[] | null>;
    startedPlayerQuests: import("react").MutableRefObject<PlayerQuestStatus[] | null>;
    eligiblePlayerQuests: import("react").MutableRefObject<PlayerQuestStatus[] | null>;
    notEligiblePlayerQuests: import("react").MutableRefObject<PlayerQuestStatus[] | null>;
    sortPlayerQuests: (questData: PlayerQuestStatus[] | null) => void;
};
