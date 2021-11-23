import React from "react";

import "./CoursePageSection.css";

function CoursePageSection({course}) {
  return (
    <section className={'course-page-section'}>
      <div className={"course-section-bg"}>
        <div className="course-section-card-img"><img src={course.icon} alt=""/></div>

        <div className={"course-description"}>
          <div className={"course-description-header"}>
            {course.title}
          </div>
          {course.description}
        </div>
      </div>
      <div className={"price-section-bg"}>
        <div className={"price-section"}>
          {
            course.plans ?
              course.prices.map((i, index) => {
                return (
                  <div key={index} className={"price-card"}>
                    {i.lessons} занятий/{i.price}
                    <div className={"buy-button"}>
                      <span className={"buy-button-text"}>
                        Заказать
                      </span>
                    </div>
                  </div>
                )
              }) :
              <div className={"price-card"}>
                Стоимость курса: {course.price}
                <div className={"buy-button"}>
                  <span className={"buy-button-text"}>
                    Заказать
                  </span>
                </div>
              </div>
          }

        </div>
      </div>
    </section>
  );
}

export default CoursePageSection;