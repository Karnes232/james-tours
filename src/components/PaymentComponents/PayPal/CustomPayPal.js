import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButtonWrapper from "./PayPalButtonWrapper";

const liveId =
  "AVcWcmzJe7g0jWuNKPDzog2U0RDAtcvWzV__g7hG3mYDXDb-38ax-CXfhbVaXg4Zeb3k-_Ry1l6aTcgl";
const sandBox =
  "AWKpOxlq063t4e3-YvGIHBWohFbzZ_o0Y1M2juHc6EaAr5iK_UfOAEKb_YxhdpRvC5uu_Sj444MyUzmZ";

const CustomPayPal = ({
  totalPrice,
  depositAmount,
  tour,
  guestCount,
  date,
}) => {
  const currency = "USD";
  return (
    <div className="flex justify-center mt-5 md:w-80 xl:w-96">
      <PayPalScriptProvider
        options={{
          "client-id": sandBox,
          components: "buttons",
          currency: "USD",
        }}
      >
        <PayPalButtonWrapper
          currency={currency}
          showSpinner={false}
          depositAmount={depositAmount}
          totalPrice={totalPrice}
          tour={tour}
          guestCount={guestCount}
          date={date}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default CustomPayPal;
