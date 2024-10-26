import { Match } from "lib/types";

export const getSummary = (matches: Match[]) => {
  return matches
    .slice()
    .sort(
      (a, b) =>
        b.homeScore + b.awayScore - (a.homeScore + a.awayScore) ||
        b.entryTimestamp.getTime() - a.entryTimestamp.getTime(),
    );
};
