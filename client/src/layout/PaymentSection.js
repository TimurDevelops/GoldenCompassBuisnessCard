import React from "react";
import {Link} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";

import Title from "../img/title.png";

import "./PaymentSection.css";

const PaymentSection = ({course, number}) => {
  const elements = useElements();
  const stripe = useStripe();

  let price;
  let lessons;
  if (course.plans === true) {
    let plan = course.prices[number - 1];
    price = plan.price;
    lessons = plan.lessons;
  } else {
    price = course.price;
    lessons = null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const {error: backendError, clientSecret} = await fetch(
      '/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethodType: 'card',
          currency: 'usd',
        }),
      }
    ).then((r) => r.json());

    if (backendError) {
      alert(backendError.message);
      return;
    }

    alert('Client secret returned');
    const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // name: 'Jenny Rosen',
          },
        },
      }
    );

    if (stripeError) {
      // Show error to your customer (e.g., insufficient funds)
      alert(stripeError.message);
      return;
    }

    // Show a success message to your customer
    // There's a risk of the customer closing the window before callback
    // execution. Set up a webhook or plugin to listen for the
    // payment_intent.succeeded event that handles any business critical
    // post-payment actions.
    alert(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);

  }

  return (
    <section>
      <div className={"payment-header"}>
        <Link to={"/main"}>
          <div className={"payment-logo"}>
            <img src={Title} alt=""/>
          </div>
        </Link>
      </div>

      <div className={"content"}>

        <div className={"payment-area"}>
          <div className={"payment-area-wrapper"}>
            <form id={"payment-form"} onSubmit={handleSubmit}>
              <label htmlFor={"card-element"}>Укажите даннные вашей карты:</label>
              <CardElement id={"card-element"}/>

              <button>Оплатить</button>
            </form>
          </div>
        </div>

        <div className={"payment-course-description"}>
          <div className={"payment-course-description-wrapper"}>
            <div className={"payment-course-icon"}>
              <div className="payment-course-section-card-img"><img src={course.icon} alt=""/></div>
            </div>

            <div className={"payment-course-title"}>
              Название курса:
              <div className={"payment-course-title-text"}>
                {course.title}
              </div>
            </div>

            {course.plans ?
              <div>
                <div className={"payment-course-price"}>
                  Цена курса:
                  <div className={"payment-course-price-text"}>
                    {price} &#8381;
                  </div>
                </div>

                <div className={"payment-course-lessons"}>
                  Количество уроков: {lessons}
                </div>
              </div>
              :
              <div className={"payment-course-lessons"}>
                Название курса: {course.title}
              </div>
            }

          </div>
        </div>

      </div>
    </section>
  );
}

export default PaymentSection;