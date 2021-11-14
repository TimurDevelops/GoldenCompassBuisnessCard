import './CoursesSection.css';
import {FaCheck} from "react-icons/fa";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-card">
        <div className="about-header">
          <span className="about-header-text">Наши курсы:</span>
        </div>

        <ul className="about-us">
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Подготовка к школе</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Логопедия</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Ментальная арифметика</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Английский язык</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Скорочтение</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Шахматы</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Мировая культура</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">География и космос</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CoursesSection;
