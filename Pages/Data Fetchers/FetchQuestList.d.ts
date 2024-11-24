import React from "react";
export type questlist = {
    quests: string[];
};
type QuestFetcherProps = {
    onFetchComplete?: (fetched: boolean) => void;
};
export declare const QuestFetcher: React.FC<QuestFetcherProps>;
export {};
