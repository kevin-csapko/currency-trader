import React, { useContext } from "react";
import ConversionContext from "../../context/conversion/conversionContext";
import { MEDIAN_CONVERSION_RATE_DISTRIBUTION_DAYS } from "../../utils/settings";

import arrowUp from "../../assets/img/arrow-up-solid.svg";
import arrowDown from "../../assets/img/arrow-down-solid.svg";
import arrowPar from "../../assets/img/arrows-alt-h-solid.svg";

import "./Rates.css";

const Rates = (props) => {
  const conversionContext = useContext(ConversionContext);

  const {
    conversionFrom,
    conversionTo,
    medianConversionRate,
    currentConversionRate,
  } = conversionContext;

  let arrow = arrowUp;

  if (currentConversionRate > medianConversionRate) {
    arrow = arrowUp;
  } else if (currentConversionRate < medianConversionRate) {
    arrow = arrowDown;
  } else {
    arrow = arrowPar;
  }

  return (
    <div className="Rates">
      <div className="container">
        <div className="">
          <div className="conversion-rate">{medianConversionRate}</div>
          <p>
            Median {conversionFrom} to {conversionTo} conversion rate in the
            last {MEDIAN_CONVERSION_RATE_DISTRIBUTION_DAYS} days
          </p>
        </div>
        <div className="">
          <img src={arrow} alt="" />
        </div>
        <div className="">
          <div className="conversion-rate">{currentConversionRate}</div>
          <p>
            Current {conversionFrom} to {conversionTo} conversion rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
