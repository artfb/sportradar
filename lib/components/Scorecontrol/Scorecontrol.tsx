import { useMatches } from "../../../lib/hooks/useMatches";
import React from "react";
import { Scoreboard } from "../Scoreboard";

export const Scorecontrol: React.FC = () => {
  const { games, handleStartGame, handleFinishGame, handleUpdateScore } =
    useMatches();

  const activeMatches = games.filter((g) => g.status === "active");

  return (
    <div>
      <form onSubmit={handleStartGame}>
        <label>
          Home Team:
          <input name="home" aria-label="Home Team" />
        </label>

        <label>
          Away Team:
          <input name="away" aria-label="Away Team" />
        </label>
        <button type="submit" aria-label="Add Match">
          Add Match
        </button>
      </form>

      <div>
        {activeMatches.map((game) => (
          <form onSubmit={handleUpdateScore} key={game.id}>
            <input type="hidden" name="id" value={game.id} />
            <label htmlFor={`homeScore-${game.homeTeam}`}>
              {game.homeTeam}
              <input
                id={`homeScore-${game.homeTeam}`}
                type="number"
                name="homeScore"
                aria-label="Home Score"
              />
            </label>{" "}
            -{" "}
            <label htmlFor={`awayScore-${game.awayTeam}`}>
              <input
                id={`awayScore-${game.awayTeam}`}
                name="awayScore"
                type="number"
                aria-label="Away Score"
              />
              {game.awayTeam}
            </label>
            <button type="submit">Update Score</button>
            <button type="button" onClick={() => handleFinishGame(game.id)}>
              Finish Game
            </button>
          </form>
        ))}
      </div>

      <Scoreboard matches={games} />
    </div>
  );
};
