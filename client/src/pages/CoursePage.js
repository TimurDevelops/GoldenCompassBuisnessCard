import React from "react";
import {useParams} from "react-router-dom";

import CoursePageSection from "../layout/CoursePageSection";
import Header from "../layout/Header";


function CoursePage({courses}) {
  const {courseId} = useParams();

  const course = courses.filter(i => i.link === courseId)

  return (
    <div className={'course-page'}>
      <Header offset={0} appHeight={0} active={false}/>
      <CoursePageSection course={course}/>
    </div>
  );
}

export default CoursePage;
