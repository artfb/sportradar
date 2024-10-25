import { render, screen } from "@testing-library/react";
import { Scoreboard } from "./Scoreboard";
import { matches } from "tests/mocks/matches";

describe("App", () => {
  it("renders the App component", () => {
    render(<Scoreboard matches={[]} />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});

describe("Scoreboard component", () => {
  it("should display active matches", () => {
    render(<Scoreboard matches={matches} />);
    const activeSummary = screen.getByTestId("active-summary");
    expect(activeSummary).toBeInTheDocument();
    expect(activeSummary.children.length).toBe(1);
  });

  it("should display completed matches", () => {
    render(<Scoreboard matches={matches} />);
    const completedSummary = screen.getByTestId("completed-summary");
    expect(completedSummary).toBeInTheDocument();
    expect(completedSummary.children.length).toBe(1);
  });
});
