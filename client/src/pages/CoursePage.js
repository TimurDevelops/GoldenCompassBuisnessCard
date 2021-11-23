import React from "react";
import Header from "../layout/Header";
import PriceSection from "../layout/PriceSection";
import CourseDescription from "../layout/CourseDescription";

function CoursePage() {

  return (
    <div>
      <Header offset={0} appHeight={0} active={false}/>
      <PriceSection/>
      <CourseDescription/>
    </div>
  );
}

export default CoursePage;
