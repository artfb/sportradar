import type { Match } from "@my/scoreboard";

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
  {
    id: 4,
    homeTeam: "Uruguay",
    awayTeam: "Italy",
    homeScore: 6,
    awayScore: 6,
    entryTimestamp: new Date("2024-10-24T18:30:00Z"),
    duration: 70,
    status: "active",
  },
  {
    id: 5,
    homeTeam: "Argentina",
    awayTeam: "Australia",
    homeScore: 3,
    awayScore: 1,
    entryTimestamp: new Date("2024-10-24T19:00:00Z"),
    duration: 90,
    status: "completed",
  },
];
