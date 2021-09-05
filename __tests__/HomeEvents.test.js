import {
  render,
  fireEvent,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";
import Home from "../pages/index";

describe("home_page_events_success", () => {
  const TODO_ITEM = "Finish assignment";

  beforeEach(() => {
    render(<Home />);
  });

  afterEach(cleanup);

  test("react to text input change", () => {
    const input = screen.getByPlaceholderText("e.g. Finish this challenge");
    // Empty input initially
    expect(input.value).toEqual("");
    fireEvent.change(input, { target: { value: TODO_ITEM } });
    expect(input.value).toEqual(TODO_ITEM);
  });

  test("react to submit button click", async () => {
    const input = screen.getByPlaceholderText("e.g. Finish this challenge");
    fireEvent.change(input, { target: { value: TODO_ITEM } });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    // Clear input state
    expect(input.value).toEqual("");

    // Display list item
    await waitFor(() => {
      const listItem = screen.getByRole("listitem");
      expect(listItem).toBeVisible();
      expect(listItem).toHaveTextContent(TODO_ITEM);
    });
  });
});
