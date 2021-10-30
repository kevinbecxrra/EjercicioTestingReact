import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";
import ReactTestUtils from 'react-dom/test-utils';
let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like labelActive="Active" labelInactive="Inactive" />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Likes Component", () => {
  it("Defaults to 0 Likes", () => {
    const pLikes = container.querySelector("p");
    expect(pLikes.textContent).toBe("Likes: 0");
  });
  it("Likes Plus 1 when clicks like", () => {
    const buttonLike = document.getElementById("increment");
    const pLikes = container.querySelector("p");
    ReactTestUtils.Simulate.click(buttonLike);
    expect(pLikes.textContent).toBe("Likes: 1");
  });
  it("Likes less 1 when clicks like", () => {
    const buttonDislike = document.getElementById("decrement");
    const pLikes = container.querySelector("p");
    ReactTestUtils.Simulate.click(buttonDislike);
    expect(pLikes.textContent).toBe("Likes: -1");
  });
});