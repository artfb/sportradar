import { Match } from "lib/types";

export const mockMatches: Match[] = [
  {
    id: 1,
    homeTeam: "Mexico",
    awayTeam: "Canada",
    homeScore: 0,
    awayScore: 5,
    entryTimestamp: new Date("2024-10-24T15:30:00Z"),
    duration: 90,
    status: "completed",
  },
  {
    id: 2,
    homeTeam: "Spain",
    awayTeam: "Brazil",
    homeScore: 10,
    awayScore: 2,
    entryTimestamp: new Date("2024-10-24T16:00:00Z"),
    duration: 65,
    status: "active",
  },
];
