import React, { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PayPalButtonWrapper = ({
  currency,
  showSpinner,
  depositAmount,
  totalPrice,
  tour,
  guestCount,
  date,
}) => {
  const style = { layout: "vertical", shape: "pill" };
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [host, setHost] = useState("");
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    setHost(window.location.origin);
  }, [currency, showSpinner]);
  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        className="w-full"
        style={style}
        disabled={false}
        forceReRender={[depositAmount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: depositAmount,
                  },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING",
              },
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            const firstName = details.payer.name.given_name;
            const lastName = details.payer.name.surname;
            const deposit = details.purchase_units[0].amount.value;
            window.location.href = `${host}/payments/thankyou/?firstname=${firstName}&lastname=${lastName}&tour=${tour}&deposit=${deposit}&balance=${totalPrice - deposit}&guestCount=${guestCount}&date=${date}`;
          });
        }}
      />
    </>
  );
};

export default PayPalButtonWrapper;
