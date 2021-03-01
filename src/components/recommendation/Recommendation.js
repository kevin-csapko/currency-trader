import React, { useContext } from "react";
import ConversionContext from "../../context/conversion/conversionContext";

import "./Recommendation.css";

const Recommendation = (props) => {
  const conversionContext = useContext(ConversionContext);

  const { medianConversionRate, currentConversionRate } = conversionContext;

  return (
    <div className="Recommendation">
      {currentConversionRate > medianConversionRate && (
        <p>
          The conversion rate seems to be going up. We do not think its a good
          idea to sell right now!
        </p>
      )}
      {currentConversionRate < medianConversionRate && (
        <p>
          The conversion rate seems to be going down. Perhaps it's time to get
          in and buy the dip!
        </p>
      )}
      {currentConversionRate === medianConversionRate && (
        <p>
          The conversion rate seems to be holding steady. Whether your buy or
          sell, the choice is yours!
        </p>
      )}
    </div>
  );
};

export default Recommendation;
