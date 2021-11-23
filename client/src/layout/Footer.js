import React from "react";
import {FaInstagram, FaVk, FaFacebook, FaPhone, FaMailBulk} from "react-icons/fa";
import Title from "../img/title.png"
import './Footer.css';


const Footer = () => {
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




          {/*<div className={"info"}>*/}
          {/*  <p className={"info-line"}>9:00 - 21:00 Europe/Moscow</p>*/}
          {/*  <p className={"info-line"}>г. Москва, Покровский бульвар, 4/17 с6</p>*/}
          {/*  <p className={"info-line"}>ОГРНИП: 318774600219347</p>*/}
          {/*  <p className={"info-line"}>ИНН: 772790237484</p>*/}
          {/*</div>*/}

        </div>

        <div className={"lessons"}>
          <div className={"footer-courses-title"}>О наших курсах:</div>

          <p className={"footer-course"}><a href={""}>Подготовка к школе</a></p>
          <p className={"footer-course"}><a href={""}>Логопедия</a></p>
          <p className={"footer-course"}><a href={""}>Ментальная арифметика</a></p>
          <p className={"footer-course"}><a href={""}>Английский язык</a></p>
          <p className={"footer-course"}><a href={""}>Скорочтение</a></p>
          <p className={"footer-course"}><a href={""}>Шахматы</a></p>
          <p className={"footer-course"}><a href={""}>Мировая культура</a></p>
          <p className={"footer-course"}><a href={""}>География и космос</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
