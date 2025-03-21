import { render } from "@testing-library/react";
import Root from "./root.component";
import React from "react";
describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root {...{globalStore:{}}} />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
