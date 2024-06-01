import React from "react";
import CustomPayPal from "./PayPal/CustomPayPal";

const Payment = ({ guestCount, depositPrice, cost, tour, date }) => {
  const totalIndividualPrice = depositPrice + cost;
  const totalPrice = totalIndividualPrice * guestCount;
  const depositAmount = depositPrice * guestCount;
  return (
    <>
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
      <CustomPayPal
        totalPrice={totalPrice}
        depositAmount={depositAmount}
        tour={tour}
        guestCount={guestCount}
        date={date}
      />
    </>
  );
};

export default Payment;
