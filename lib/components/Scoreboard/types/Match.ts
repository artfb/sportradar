export type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  entryTimestamp: Date; // Assuming timestamp as Date object
  duration: number; // In minutes
  status: "pending" | "active" | "paused" | "completed";
};
