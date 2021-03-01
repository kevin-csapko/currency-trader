import React, { useReducer } from "react";
import axios from "axios";
import moment from "moment";
import ConversionContext from "./conversionContext";
import conversionReducer from "./conversionReducer";
import { CURRENCY_TOGGLED } from "../types";
import { MEDIAN_CONVERSION_RATE_DISTRIBUTION_DAYS } from "../../utils/settings";

const ConversionState = (props) => {
  const initialState = {
    conversionFrom: "CAD",
    conversionTo: "USD",
    medianConversionRate: 0,
    currentConversionRate: 0,
  };

  const [state, dispatch] = useReducer(conversionReducer, initialState);

  const toggleCurrency = async (from, to) => {
    let thirtyDaysAgo = moment()
      .subtract(MEDIAN_CONVERSION_RATE_DISTRIBUTION_DAYS, "days")
      .format("YYYY-MM-DD");

    try {
      const response = await axios.get(
        `/${thirtyDaysAgo}..?from=${from}&to=${to}`
      );

      dispatch({
        type: CURRENCY_TOGGLED,
        payload: response.data,
      });
    } catch (error) {
      console.error("API error!");
    }
  };

  return (
    <ConversionContext.Provider
      value={{
        conversionFrom: state.conversionFrom,
        conversionTo: state.conversionTo,
        medianConversionRate: state.medianConversionRate,
        currentConversionRate: state.currentConversionRate,
        toggleCurrency: toggleCurrency,
      }}
    >
      {props.children}
    </ConversionContext.Provider>
  );
};

export default ConversionState;
