import React from "react";
import ReactDOM from "react-dom";
import Toggle from "./components/toggle/Toggle";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

import ConversionContext from "./context/conversion/conversionContext";

afterEach(cleanup);

test("renders the app", () => {
  render(<App />);
});
