import { CURRENCY_TOGGLED } from "../types";
import getOppositeCurrency from "../../utils/getOppositeCurrency";

const conversionReducer = (state, action) => {
  switch (action.type) {
    case CURRENCY_TOGGLED:
      let conversionRates = Object.entries(action.payload.rates).map(
        ([date, conversionRate]) =>
          conversionRate[getOppositeCurrency(action.payload.base)]
      );
      let medianIndex = Math.floor(conversionRates.length / 2);
      let medianConversionRate =
        conversionRates.length % 2 !== 0
          ? conversionRates[medianIndex]
          : (conversionRates[medianIndex - 1] + conversionRates[medianIndex]) /
            2;

      return {
        ...state,
        conversionFrom: action.payload.base,
        conversionTo: getOppositeCurrency(action.payload.base),
        medianConversionRate: medianConversionRate.toFixed(2),
        currentConversionRate: conversionRates[
          conversionRates.length - 1
        ].toFixed(2),
      };
    default:
      return state;
  }
};

export default conversionReducer;
