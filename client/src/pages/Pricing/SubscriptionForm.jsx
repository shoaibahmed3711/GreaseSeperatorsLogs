// src/pages/SubscriptionForm.jsx
import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend for PayPal integration
    console.log('Email:', email);
    console.log('Plan:', plan);
    // You would handle the submission to PayPal here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Subscribe to our PayPal Plan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
            Credit Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter your credit card number"
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Subscribe
          </button>
          <span className="text-sm text-gray-600">Secure payment with PayPal</span>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
