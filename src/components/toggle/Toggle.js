import React, { useState, useContext, useEffect } from "react";
import ConversionContext from "../../context/conversion/conversionContext";
import getOppositeCurrency from "../../utils/getOppositeCurrency";
import "./Toggle.css";

const Toggle = (props) => {
  const conversionContext = useContext(ConversionContext);

  const { toggleCurrency } = conversionContext;

  const [selectedCurrency, setSelectedCurrency] = useState("CAD");

  useEffect(() => {
    toggleCurrency(selectedCurrency, getOppositeCurrency(selectedCurrency));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCurrency]);

  const onChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className="Toggle">
      <div className="toggle-switch">
        <input
          type="radio"
          id="currency-cad"
          name="currency"
          value="CAD"
          defaultChecked={true}
          onChange={onChange}
        />
        <label htmlFor="currency-cad">CAD to USD</label>
        <input
          type="radio"
          id="currency-usd"
          name="currency"
          value="USD"
          onChange={onChange}
        />
        <label htmlFor="currency-usd">USD to CAD</label>
      </div>
    </div>
  );
};

export default Toggle;
