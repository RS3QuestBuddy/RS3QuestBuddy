import { PlayerQuestStatus } from "./sortPlayerQuests";
export declare const useFetchPlayerInfo: () => {
    readonly playerQuests: import("react").MutableRefObject<PlayerQuestStatus[] | null>;
    readonly fetchPlayerQuests: (playerName: String) => Promise<void>;
    readonly isLoading: boolean;
    readonly hasError: boolean;
};
