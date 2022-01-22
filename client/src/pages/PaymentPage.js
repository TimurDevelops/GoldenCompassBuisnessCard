import React from "react";
import {useParams} from "react-router-dom";
import PaymentSection from "../layout/PaymentSection";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import {STRIPE_PUBLISHABLE_API_KEY} from '../config.json';

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_API_KEY);

function PaymentPage({courses}) {
  const {courseId, number} = useParams();

  const course = courses.filter(i => {
    return i.link === "/course/" + courseId
  })[0]

  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentSection course={course} number={number}/>
      </Elements>
    </>
  );
}

export default PaymentPage;