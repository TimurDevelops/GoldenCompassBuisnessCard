import './CoursesSection.css';
import {FaCheck} from "react-icons/fa";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-card">
        <div className="about-header">
          <span className="about-header-text">Мы предлагаем:</span>
        </div>

        <ul className="about-us">
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Онлайн-образование 5-11 классов, по программам, соответствующим ФГОС</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Выдача аттуестатов государственного образца</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Полный цикл подготовки к экзаменам ОГЭ/ЕГЭ</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Поступление в любое время года</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Авторские программы обучения</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Современная многофункциональная образовательная платформа</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CoursesSection;
