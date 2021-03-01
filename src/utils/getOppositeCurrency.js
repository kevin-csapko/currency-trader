const getOppositeCurrency = (currency) => {
  if(currency === "CAD") {
    return "USD";
  } else {
    return "CAD";
  }
};

export default getOppositeCurrency;