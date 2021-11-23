import React from "react";
import './IntroductionSection.css';
import Title from "../img/title.png"

const IntroductionSection = () => {
  return (
    <section className="introduction-section" id="main">
      <div className="introduction-header">
        <p className={"introduction-header-img"}><img src={Title} alt=""/></p>
        <span>Онлайн школа детского развития</span>
      </div>
    </section>
  );
}

export default IntroductionSection;
