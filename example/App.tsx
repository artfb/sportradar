import "./App.css";
import { Scoreboard } from "@my/scoreboard";
import { mockMatches } from "./data/matches";

function App() {
  return <Scoreboard matches={mockMatches} />;
}

export default App;
