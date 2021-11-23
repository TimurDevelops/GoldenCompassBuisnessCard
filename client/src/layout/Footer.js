import React from "react";
import {FaInstagram, FaVk, FaFacebook, FaPhone, FaMailBulk} from "react-icons/fa";
import Title from "../img/title.png"
import {Link} from 'react-router-dom';

import './Footer.css';


const Footer = ({courses}) => {
  return (
    <footer className="footer">
      <div className={"footer-content"}>


        <div className={"socials"}>
          <div className={"footer-logo"}>
            <img src={Title} alt=""/>
          </div>
          <div className={"socials-links"}>
            <div className={"social-link"}>
              <a href="#"><FaInstagram/></a>
            </div>
            <div className={"social-link"}>
              <a href="#"><FaVk/></a>
            </div>
            <div className={"social-link"}>
              <a href="#"><FaFacebook/></a>
            </div>
          </div>

          <div className={"contacts"}>
            <p className={"contact-line contact-title"}>Наши контакты</p>
            <p className={"contact-line"}><FaPhone/>+7 (000) 000-00-00</p>
            <p className={"contact-line"}><FaMailBulk/>gcompassss@gmail.com</p>
          </div>
        </div>

        <div className={"lessons"}>
          <div className={"footer-courses-title"}>О наших курсах:</div>

          {courses.map((i) => {
            return (
              <Link to={i.link}>
                <p className={"footer-course"}>{i.title}</p>
              </Link>

            )
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
