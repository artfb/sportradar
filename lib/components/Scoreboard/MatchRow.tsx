import { Match } from "../../types";

type MatchRowProps = {
  match: Match;
};

export const MatchRow = (props: MatchRowProps) => {
  const { match } = props;

  return (
    <div key={match.id}>
      <p>
        {match.homeTeam} {match.homeScore} - {match.awayTeam} {match.awayScore}
      </p>
    </div>
  );
};
