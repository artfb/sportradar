export type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  entryTimestamp: number; // Timestamp
  duration: number; // In minutes
  status: "active" | "completed";
};
