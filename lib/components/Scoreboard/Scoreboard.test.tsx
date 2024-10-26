import { render, screen } from "@testing-library/react";
import { Scoreboard } from "./Scoreboard";
import { mockMatches } from "tests/mocks/matches.mock";
import { completedMock } from "tests/mocks/completed.mock";

describe("App", () => {
  it("renders the App component", () => {
    render(<Scoreboard matches={[]} />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});

describe("Scoreboard component", () => {
  it("should display active matches", () => {
    render(<Scoreboard matches={mockMatches} />);
    const activeSummary = screen.getByTestId("active-summary");
    expect(activeSummary).toBeInTheDocument();
    expect(activeSummary.children.length).toBe(1);
  });

  it("should display completed matches", () => {
    render(<Scoreboard matches={mockMatches} />);
    const completedSummary = screen.getByTestId("completed-summary");
    expect(completedSummary).toBeInTheDocument();
    expect(completedSummary.children.length).toBe(1);
  });

  it("should display no matches message", () => {
    render(<Scoreboard matches={[]} />);

    const heading = screen.getByText("No matches", { selector: "h2" });

    expect(heading).toBeInTheDocument();
  });

  it("should display completed matched in order", () => {
    render(<Scoreboard matches={completedMock} />);

    const summary = screen.getByTestId("completed-summary");

    const expectedOrder = ["Spain 10 - Brazil 0", "Mexico 5 - Canada 5"];

    expectedOrder.forEach((expectedText, index) => {
      expect(summary.children[index]).toHaveTextContent(expectedText);
    });
  });
});
