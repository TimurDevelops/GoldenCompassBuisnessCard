import React from "react";


function CoursePageSection({course}) {
  return (
    <section className={'course-page-section'}>
      <div className={"price-section"}>
        {
          course.plans ?
            course.prices.map(i=>{
              return (
                <div className={"price-card"}>
                  {i.lessons} занятий - {i.price} ({i.lessons/i.price} за занятие)
                </div>
              )
            }) :
            <div className={"price"}>{course.price}</div>
        }

      </div>
      <div className={"course-description"}>{course.description}</div>
    </section>
  );
}

export default CoursePageSection;