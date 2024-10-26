import { render, screen, fireEvent, within } from "@testing-library/react";
import { Scorecontrol } from "./Scorecontrol";

describe("Scorecontrol", () => {
  it("should start a game with initial score 0-0", () => {
    render(<Scorecontrol />);
    fireEvent.change(screen.getByLabelText("Home Team"), {
      target: { value: "Mexico" },
    });
    fireEvent.change(screen.getByLabelText("Away Team"), {
      target: { value: "Canada" },
    });
    fireEvent.click(screen.getByText("Add Match"));

    expect(screen.getByText("Mexico 0 - Canada 0")).toBeInTheDocument();
  });

  it("should update the score of a game", () => {
    render(<Scorecontrol />);
    fireEvent.change(screen.getByLabelText("Home Team"), {
      target: { value: "Mexico" },
    });
    fireEvent.change(screen.getByLabelText("Away Team"), {
      target: { value: "Canada" },
    });
    fireEvent.click(screen.getByText("Add Match"));

    fireEvent.change(screen.getByLabelText("Home Score"), {
      target: { value: "3" },
    });
    fireEvent.change(screen.getByLabelText("Away Score"), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByText("Update Score"));

    expect(screen.getByText("Mexico 3 - Canada 2")).toBeInTheDocument();
  });

  it("should return a summary of games ordered by total score", () => {
    render(<Scorecontrol />);

    fireEvent.change(screen.getByLabelText("Home Team"), {
      target: { value: "Mexico" },
    });
    fireEvent.change(screen.getByLabelText("Away Team"), {
      target: { value: "Canada" },
    });
    fireEvent.click(screen.getByText("Add Match"));

    fireEvent.change(screen.getByLabelText("Home Team"), {
      target: { value: "Spain" },
    });
    fireEvent.change(screen.getByLabelText("Away Team"), {
      target: { value: "Brazil" },
    });
    fireEvent.click(screen.getByText("Add Match"));

    fireEvent.change(screen.getByLabelText("Spain"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText("Brazil"), {
      target: { value: "2" },
    });
    const spainBrazilForm = screen.getByText("Spain").closest("form");
    expect(spainBrazilForm).toBeInTheDocument();
    fireEvent.click(within(spainBrazilForm!).getByText("Update Score"));

    const summary = screen.getByTestId("active-summary");

    expect(summary.children[0].textContent).toBe("Mexico 0 - Canada 0");
    expect(summary.children[1].textContent).toBe("Spain 10 - Brazil 2");
  });

  it("should finish a game", async () => {
    render(<Scorecontrol />);
    fireEvent.change(screen.getByLabelText("Home Team"), {
      target: { value: "Mexico" },
    });
    fireEvent.change(screen.getByLabelText("Away Team"), {
      target: { value: "Canada" },
    });
    fireEvent.click(screen.getByText("Add Match"));
    expect(screen.getByText("Mexico 0 - Canada 0")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Finish Game"));

    const summary = await screen.getByTestId("completed-summary");
    expect(summary.children[0]).toHaveTextContent("Mexico 0 - Canada 0");
  });
});
