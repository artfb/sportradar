import { Match } from "lib/types";

export const getSummary = (
  matches: Match[],
  sortFn?: (a: Match, b: Match) => number,
) => {
  return matches
    .slice()
    .sort(
      (a, b) =>
        b.homeScore + b.awayScore - (a.homeScore + a.awayScore) ||
        sortFn?.(a, b) ||
        b.entryTimestamp - a.entryTimestamp,
    );
};
