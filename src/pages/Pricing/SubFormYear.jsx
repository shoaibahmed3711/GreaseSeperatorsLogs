import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function SubFormYear() {
  const initialOptions = {
    "client-id": "AWsgX_lh86eRkoMccZqu3zXL6xYlskwKZnvboNn0DWtm-Z1hEt54VsrBzpRNNlsJkUH9Tw7FJktCLYfb",
    currency: "USD",
    intent: "subscription",
  };

  const serverUrl = "http://localhost:8888";

  const createOrder = (data, actions) => {
    console.log("Creating order...");
    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: {
          description: "Grease separator log operator",
          cost: "4.99"
        }
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(order => {
      console.log("Order ID:", order.id);
      return order.id;
    })
    .catch(error => {
      console.error("Error creating order:", error);
    });
  };

  const onApprove = (data, actions) => {
    console.log("Order approved:", data);
    return fetch(`${serverUrl}/my-server/capture-paypal-order`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(details => {
      console.log("Order captured:", details);
    })
    .catch(error => {
      console.error("Error capturing order:", error);
    });
  };

  useEffect(() => {
    console.log("SubscriptionForm component mounted");
  }, []);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className='h-screen'>
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </PayPalScriptProvider>
  );
}

export default SubFormYear;
