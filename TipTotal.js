import React from "react";

const TipTotal = ({ billAmount, serviceAmount1, serviceAmount2 }) => {
  const numericBillAmount = parseFloat(billAmount) || 0;
  const fee1 = (numericBillAmount / 100) * (parseInt(serviceAmount1, 10) || 0);
  const fee2 = (numericBillAmount / 100) * (parseInt(serviceAmount2, 10) || 0);
  const totalToPay = numericBillAmount + fee1 + fee2;

  return (
    <div>
      <h1>
        You pay ${totalToPay} (${numericBillAmount} + ${fee1} tip1 + ${fee2}{" "}
        tip2)
      </h1>
    </div>
  );
};

export default TipTotal;
