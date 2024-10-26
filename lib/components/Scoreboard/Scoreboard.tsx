import { Match } from "../../types";
import styles from "./styles.module.css";
import { MatchRow } from "../MatchRow";
import { getSummary } from "../../utils";

type ScoreboardProps = {
  matches: Match[];
};

export function Scoreboard(props: ScoreboardProps) {
  const { matches } = props;
  const activeMatches = matches.filter((match) => match.status !== "completed");
  const completedMatches = matches.filter(
    (match) => match.status === "completed",
  );

  if (!matches.length) return <h2>No matches</h2>;

  return (
    <div className={styles.root}>
      <h2>Active Matches</h2>
      <div data-testid="active-summary">
        {activeMatches.map((match) => (
          <MatchRow match={match} key={match.id} />
        ))}
      </div>

      <h2>Completed Matches</h2>
      <div data-testid="completed-summary">
        {getSummary(completedMatches, (a, b) => a.id - b.id).map((match) => (
          <MatchRow match={match} key={match.id} />
        ))}
      </div>
    </div>
  );
}
