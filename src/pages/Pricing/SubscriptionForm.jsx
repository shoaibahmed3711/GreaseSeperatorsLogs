import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function SubscriptionForm() {
  const initialOptions = {
    "client-id": "AWowW6GvnRMlzraQiS-ZGw4uCNLVCn_DCf9_Kpguz2a3KdZk0XTUFnvKTWYLUMKdn59sZ-qwxo5CkCSg",
    currency: "EUR",
  };

  const [message, setMessage] = useState("");

  return (
    <div>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
            color: "gold",
            label: "paypal",
          }}
          createOrder={async (data, actions) => {
            try {
              const response = await fetch("/api/orders", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  cart: [
                    {
                      id: "YOUR_PRODUCT_ID",
                      quantity: 1, // Replace with your product quantity
                    },
                  ],
                }),
              });

              if (!response.ok) {
                const errorMessage = `Error: ${response.status} ${response.statusText}`;
                console.error(errorMessage);
                throw new Error(errorMessage);
              }

              const orderData = await response.json();

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              setMessage(`Could not initiate PayPal Checkout...${error}`);
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const response = await fetch(`/api/orders/${data.orderID}/capture`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              });

              if (!response.ok) {
                const errorMessage = `Error: ${response.status} ${response.statusText}`;
                console.error(errorMessage);
                throw new Error(errorMessage);
              }

              const orderData = await response.json();

              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                return actions.restart();
              } else if (errorDetail) {
                throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
              } else {
                const transaction = orderData.purchase_units[0].payments.captures[0];
                setMessage(`Transaction ${transaction.status}: ${transaction.id}. See console for all available details`);
                console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
              }
            } catch (error) {
              console.error(error);
              setMessage(`Sorry, your transaction could not be processed...${error}`);
            }
          }}
        />
      </PayPalScriptProvider>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubscriptionForm;
