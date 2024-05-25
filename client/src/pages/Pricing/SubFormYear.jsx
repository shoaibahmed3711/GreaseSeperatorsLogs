// src/pages/SubscriptionForm.jsx
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-stripe-public-key-here');

const SubFormYear = () => {
  return (
    <Elements stripe={stripePromise}>
      <SubscriptionFormContent />
    </Elements>
  );
};

const SubscriptionFormContent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required.';
    if (!name) newErrors.name = 'Name on card is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        email,
        name,
      },
    });

    if (error) {
      console.error('Error creating payment method:', error);
      setErrors({ stripe: error.message });
      setIsSubmitting(false);
      return;
    }

    // Here you would send `paymentMethod.id` and other details to your server
    // to create the subscription and handle the payment process.
    console.log('Payment method created:', paymentMethod);

    alert('Subscription successful!');
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Subscribe to our Yearly Plan for €50</h2>
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
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name on Card
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the name on your card"
            required
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">
            Card Details
          </label>
          <CardElement
            id="card-element"
            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          {errors.stripe && <p className="text-red-500 text-sm mt-1">{errors.stripe}</p>}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#444444] text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-blue-200"
          >
            {isSubmitting ? 'Submitting...' : 'Proceed to Payment'}
          </button>
          <span className="text-sm text-gray-600">Secure payment with Stripe</span>
        </div>
      </form>
    </div>
  );
};

export default SubFormYear;
