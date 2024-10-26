import { Match } from "../../lib/types";
import { useState } from "react";

export const useMatches = () => {
  const [games, setGames] = useState<Match[]>([]);

  const handleStartGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const homeTeam = formData.get("home") as string;
    const awayTeam = formData.get("away") as string;

    if (!(homeTeam && awayTeam)) return;

    const newGame: Match = {
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
      id: Date.now(),
      entryTimestamp: Date.now(),
      duration: 0,
      status: "active",
    };
    setGames([...games, newGame]);
  };

  const handleFinishGame = (id: number) => {
    setGames(
      games.map((game) => ({
        ...game,
        ...(game.id === id && {
          status: "completed",
        }),
      })),
    );
  };

  const handleUpdateScore = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const homeScore = formData.get("homeScore") as unknown as number;
    const awayScore = formData.get("awayScore") as unknown as number;
    const id = formData.get("id") as unknown as string;

    setGames(
      games.map((game) =>
        game.id === +id
          ? { ...game, homeScore, awayScore, entryTimestamp: Date.now() }
          : game,
      ),
    );
  };

  return {
    handleStartGame,
    handleUpdateScore,
    handleFinishGame,
    games,
  };
};
