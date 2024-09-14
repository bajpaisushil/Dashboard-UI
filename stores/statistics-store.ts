import { create } from "zustand";

interface StatsState{
    rank: string;
    percentile: string;
    score: string;
    setRank: (rank: string)=> void;
    setPercentile: (percentile: string)=> void;
    setScore: (score: string)=> void;
}


export const useStatsStore=create<StatsState>((set)=>({
    rank: '1',
    percentile: '1',
    score: '1',
    setRank: (rank)=> set({rank}),
    setPercentile: (percentile)=> set({percentile}),
    setScore: (score)=> set({score}),
}))
