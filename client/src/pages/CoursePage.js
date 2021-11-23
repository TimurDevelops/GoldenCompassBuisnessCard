import React from "react";
import {useParams} from "react-router-dom";

import CoursePageSection from "../layout/CoursePageSection";
import Header from "../layout/Header";
import BottomSection from "../layout/BottomSection";


function CoursePage({courses}) {
  const {courseId} = useParams();

  const course = courses.filter(i => {
    return i.link === "/course/" + courseId
  })[0]

  return (
    <div className={'course-page'}>
      <Header offset={0} appHeight={0} active={false}/>
      <CoursePageSection course={course}/>
      <BottomSection courses={courses}/>
    </div>
  );
}

export default CoursePage;
