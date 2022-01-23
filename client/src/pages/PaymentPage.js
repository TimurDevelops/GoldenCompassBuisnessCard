import React from "react";
import {useParams} from "react-router-dom";
import PaymentSection from "../layout/PaymentSection";


function PaymentPage({courses}) {
  const {courseId, number} = useParams();

  const course = courses.filter(i => {
    return i.link === "/course/" + courseId
  })[0]

  return (
    <>
        <PaymentSection course={course} number={number}/>
    </>
  );
}

export default PaymentPage;