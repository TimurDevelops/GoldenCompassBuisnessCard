import React from "react";

import "./CoursePageSection.css";
import {Link} from "react-router-dom";

function CoursePageSection({course}) {
  return (
    <section className={'course-page-section'} id={"course-page-section"} style={{
      backgroundImage: `url(${course.background})`,
      backgroundPosition: course.backgroundPosition,
      backgroundColor: course.backgroundColor,
    }}>
      <div className={"course-section-bg"}
           style={{left: `${course.blockPosition.x}%`, top: `${course.blockPosition.y}%`}}>
        {/*<div className="course-section-card-img"><img src={course.icon} alt=""/></div>*/}

        <div className={"course-description"} style={{background: course.blockBackground}}>
          <div className={"course-description-header"}>
            {course.title}
          </div>
          {course.description}
        </div>
      </div>
      <div className={"price-section-bg"} style={{left: `${course.pricePosition.x}%`}}>
        <div className={"price-section"}>
          {
            course.plans ?
              course.prices.map((i, index) => {
                return (
                  <div key={index} className={"price-card"}>
                    {i.lessons} занятий/{course.price}
                    <Link to={`/payment/${course.id}/${i.id}`}>
                      <div className={"buy-button"}>
                      <span className={"buy-button-text"}>
                        Заказать
                      </span>
                      </div>
                    </Link>
                  </div>
                )
              }) :
              <div className={"price-card"}>
                Стоимость курса: {course.price}
                <Link to={`/payment/${course.id}/0`}>
                  <div className={"buy-button"}>
                  <span className={"buy-button-text"}>
                    Заказать
                  </span>
                  </div>
                </Link>
              </div>
          }
        </div>
      </div>
    </section>
  );
}

export default CoursePageSection;