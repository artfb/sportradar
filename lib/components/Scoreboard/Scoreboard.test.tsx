import { render, screen } from "@testing-library/react";
import { Scoreboard } from "./Scoreboard";
import { describe, it } from "vitest";

describe("App", () => {
  it("renders the App component", () => {
    render(<Scoreboard />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});
