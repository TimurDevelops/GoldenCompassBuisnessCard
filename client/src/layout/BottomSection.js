import "./BottomSection.css";
import "./Form.scss";
import Footer from "./Footer";

const BottomSection = () => {
  return (
    <section className="bottom-section" id="contact">
      <div className="contact-section">
        <div className="login-wrapper">
          <div className='background-holder'>
            <div className="login-form">

              <form className="form">
                <div className="login-header">
                  <p>
                    <span className="golden-compass">Свяжитесь с нами</span>
                  </p>
                </div>
                <div className="inputs-wrapper">
                  <div className="form-group field">
                    <input autoComplete="off" type="input" className="form-field" placeholder="Имя" name="login"
                           id="login" required/>
                    <label htmlFor="login" className="form-label">Имя</label>
                  </div>

                  <div className="form-group field">
                    <input type="email" className="form-field" placeholder="Электронная почта" name="email" id="email"
                           required/>
                    <label htmlFor="email" className="form-label">Электронная почта</label>
                  </div>

                  <div className="form-group field">
                    <input type="phone" className="form-field" placeholder="Номер телефона" name="phone" id="phone"
                           required/>
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
      <Footer/>
    </section>
  );
}

export default BottomSection;
