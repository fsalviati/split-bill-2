import React from "react";

const BillAmount = ({ billAmount, setBillAmount }) => {
  const handleBillAmount = (event) => {
    setBillAmount(event.target.value);
  };

  return (
    <div className="bill-amount">
      <h1>How much was the bill</h1>
      <input
        type="number"
        className="input"
        value={billAmount}
        onChange={handleBillAmount}
      ></input>
    </div>
  );
};

export default BillAmount;
