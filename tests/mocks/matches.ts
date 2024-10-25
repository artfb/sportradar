import { Match } from "lib/components/Scoreboard/types";

export const matches: Match[] = [
  {
    id: 1,
    homeTeam: "Mexico",
    awayTeam: "Canada",
    homeScore: 0,
    awayScore: 5,
    entryTimestamp: new Date(),
    duration: 90,
    status: "completed",
  },
  {
    id: 2,
    homeTeam: "Spain",
    awayTeam: "Brazil",
    homeScore: 10,
    awayScore: 2,
    entryTimestamp: new Date(),
    duration: 45,
    status: "active",
  },
];
