import React from "react";

import "./CoursePageSection.css";
// import {Link} from "react-router-dom";

function CoursePageSection({course}) {
  console.log(course)
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
          {course.warning && <div className={"course-warning"}>{course.warning}</div>}
        </div>

      </div>

      <div className={"price-section-bg"} style={{left: `${course.pricePosition.x}%`}}>
        <div className={"price-section"}>
          {
            course.plans ?
              course.prices.map((i, index) => {
                return (
                  <div key={index} className={"price-card"}>
                    {course.ruPrice ? <span>{i.lessons} занятий / ₽{i.price}</span> : <span>{i.lessons} занятий / ${i.priceUs} - €{i.priceEu}</span>}
                    {/*<Link to={`/payment/${course.id}/${i.id}`}>*/}
                    <a href={`../main#contact`}>
                      <div className={"buy-button"}>
                      <span className={"buy-button-text"}>
                        Заказать
                      </span>
                      </div>
                    </a>
                  </div>
                )
              }) :
              <div className={"price-card"}>
                Стоимость курса: ${course.priceUs} - €{course.priceEu}
                {/*<Link to={`/payment/${course.id}/0`}>*/}
                <a href={`../main#contact`}>
                  <div className={"buy-button"}>
                  <span className={"buy-button-text"}>
                    Заказать
                  </span>
                  </div>
                </a>
              </div>
          }
        </div>
      </div>
    </section>
  );
}

export default CoursePageSection;