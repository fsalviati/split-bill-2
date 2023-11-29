import React from "react";

const Reset = ({ setBillAmount, setServiceAmount1, setServiceAmount2 }) => {
  const handleReset = () => {
    setBillAmount(0);
    setServiceAmount1("");
    setServiceAmount2("");
  };
  return (
    <button className="button-reset" onClick={() => handleReset()}>
      Reset
    </button>
  );
};

export default Reset;
