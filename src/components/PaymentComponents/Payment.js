import React from "react";

const Payment = ({ guestCount, depositPrice, cost }) => {
  const totalIndividualPrice = depositPrice + cost;
  const totalPrice = totalIndividualPrice * guestCount;
  const depositAmount = depositPrice * guestCount;
  return (
    <div className="flex flex-col justify-center px-5">
      <div className="flex justify-between items-center space-x-3">
        <p className="font-normal">Total Cost:</p>
        <p className="font-normal">${totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center space-x-3">
        <p className="font-normal">Deposit:</p>
        <p className="font-normal">${depositAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Payment;
