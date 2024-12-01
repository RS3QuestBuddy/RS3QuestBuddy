export declare const useFetchPlayerInfo: () => {
    readonly playerStats: string;
    readonly playerQuests: string[] | null;
    readonly fetchPlayerStats: (playerName: String) => Promise<void>;
    readonly fetchPlayerQuests: (playerName: String) => Promise<void>;
    readonly isLoading: boolean;
    readonly hasError: boolean;
};
