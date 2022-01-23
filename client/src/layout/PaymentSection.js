import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import Title from "../img/title.png";

import "./PaymentSection.css";

const PaymentSection = ({course, number}) => {

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

  useEffect(() => {

    const options = {
      account: 32691195,
      amount: 12.34,
      transactionId: '1234567890-abcdef'
    };

    const assistant = new window.Assistant.Builder();

    // платёж прошёл успешно
    assistant.setOnSuccessCallback(function (operationId, transactionId) {
      // todo: здесь можно сделать что угодно – например,
      // перенаправить на другую страницу:
      // location.replace("https://domain.domain");
    });

    // платёж не прошёл
    assistant.setOnFailCallback(function (operationId, transactionId) {
      // todo: действия на ваш вкус
    });

    // платёж обрабатывается
    assistant.setOnInProgressCallback(function (operationId, transactionId) {
      // todo: тоже можно что-нибудь придумать
    });

    assistant.build(options);
  });


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
            <label htmlFor={"card-element"}>Укажите даннные вашей карты:</label>
            <div id="payment-form"/>

            <button>Оплатить</button>
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