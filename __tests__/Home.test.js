import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "../pages/index";

describe("static_content_rendering", () => {
  let container = null;

  beforeAll(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(<Home />, container);
    });
  });

  afterAll(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("title_render_success", () => {
    const titleElement = container.querySelector("h1");
    expect(titleElement).toHaveTextContent("Welcome to BAM Challenge 2021!");
  });

  test("button_render_success", () => {
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("btn-danger");
    expect(buttonElement).toHaveTextContent("Submit");
  });

  test("input_field_render_success", () => {
    const inputFieldElement = container.querySelector("input");
    expect(inputFieldElement).toBeInTheDocument();
  });

  test("mcgill_footer_logo_render_success", () => {
    const mcgillLogoElement = container.querySelector("img");
    expect(mcgillLogoElement).toBeVisible();
  });
});
