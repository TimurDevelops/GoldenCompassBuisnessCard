import React, {useState} from "react";

import Footer from "./Footer";
import {sendToEmail} from '../config.json';

import "./BottomSection.css";
import "./Form.scss";
import api from "../utils/api";

const BottomSection = ({courses}) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const subject = "Запрос на консультацию"

  const sendMail = (e) => {
    e.preventDefault();
    let body = `\nУказанное имя: ${name}\n`

    if (!email && !phone) {
      alert("Укажите ваш телефон или почту, чтобы наши специалисты могли с вами связаться")
      return
    }

    if (email && phone) {
      body += `Телефон клиента: ${phone} \nАдресс электронной почты: ${email}`
    } else if (email) {
      body += `Адресс электронной почты: ${email}`
    } else if (phone) {
      body += `Телефон клиента: ${phone}`
    }
    console.log(body)
    api.post('/send-email', {
      sendToEmail,
      subject,
      body,
    }).then(console.log);

    alert("Запрос отправлен, наши специалисты свяжутся с вами")

  }

  return (
    <section className="bottom-section" id="contact">
      <div className="contact-section">
        <div className="login-wrapper">
          <div className='background-holder'>
            <div className="login-form">

              <form className="form" onSubmit={(e) => sendMail(e)}>
                <div className="login-header">
                  <p>
                    <span className="golden-compass">Свяжитесь с нами</span>
                  </p>
                </div>
                <div className="inputs-wrapper">
                  <div className="form-group field">
                    <input autoComplete="off" type="input" className="form-field" placeholder="Имя" name="login"
                           id="login" onChange={e => setName(e.target.value)} required/>
                    <label htmlFor="login" className="form-label">Имя</label>
                  </div>

                  <div className="form-group field">
                    <input type="email" className="form-field" placeholder="Электронная почта" name="email" id="email"
                           onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="email" className="form-label">Электронная почта</label>
                  </div>

                  <div className="form-group field">
                    <input type="phone" className="form-field" placeholder="Номер телефона" name="phone" id="phone"
                           onChange={e => setPhone(e.target.value)}/>
                    <label htmlFor="phone" className="form-label">Номер телефона</label>
                  </div>

                  <div className="submit-btn-wrapper">
                    <button type="submit" className="btn" id="loginBtn">
                      <span>Бесплатная консультация</span>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
      <Footer courses={courses}/>
    </section>
  );
}

export default BottomSection;
