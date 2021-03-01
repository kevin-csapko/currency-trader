import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ConversionState from "./context/conversion/ConversionState";

import Toggle from "./components/toggle/Toggle";
import Rates from "./components/rates/Rates";
import Recommendation from "./components/recommendation/Recommendation";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ConversionState>
        <Router>
          <Fragment>
            <div className="">
              <h1>Currency Trader</h1>
              <p>
                Determine if its time to buy or sell based on today's conversion
                rates.
              </p>
              <Toggle />
              <Rates />
              <Recommendation />
            </div>
          </Fragment>
        </Router>
      </ConversionState>
    </div>
  );
};

export default App;
