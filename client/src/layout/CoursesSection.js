import React from "react";
import {Link} from 'react-router-dom';
import Card from "../components/Card";

import './CoursesSection.css';

const CoursesSection = ({courses}) => {

  return (
    <section className="courses-section" id="courses">
      <div className="cards-header">
        <h2>Наши курсы</h2>
        <div className="courses-header-bg"/>
      </div>
      <div className="cards-wrapper">
        {
          courses.map((i) => {
            return (
              <Card key={i.link}>
                <Link to={i.link}>
                  <div className="card-img"><img src={i.icon} alt=""/></div>
                  <div className="card-header"><p>{i.title}</p></div>
                  <div className="card-text"><p>{i.shortDescription}</p></div>
                </Link>
              </Card>
            )
          })
        }
      </div>
    </section>
  );
}

export default CoursesSection;
