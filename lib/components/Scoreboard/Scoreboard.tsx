import { Match } from "./types";
import styles from "./styles.module.css";

type ScoreboardProps = {
  matches: Match[];
};

export function Scoreboard(props: ScoreboardProps) {
  return <div {...props} className={styles.root}></div>;
}
