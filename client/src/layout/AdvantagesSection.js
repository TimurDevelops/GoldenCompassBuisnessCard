import {FaCheck} from "react-icons/fa";
import './AdvantagesSection.css';

const AdvantagesSection = () => {
  return (
    <section className="advantages-section" id="advantages">
      <div className="advantages-card">
        <div className="about-header">
          <span className="about-header-text">Преимущества Golden Compass:</span>
        </div>

        <ul className="about-us">
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Занятия проводят опытные, дипломированные специалисты</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Для занятий не нужно никуда ехать, достаточно планшета или компьютера</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Мы ценим ваше время ⌛ и подберем удобное для вас расписание занятий</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Наши методики делают обучение интересным и максимально эффективным</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Наша программа постоянно совершенствуется, чтобы оставаться интересной для учеников и их родителей</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">В нашей школе, мы предлагаем ндивидуальный подход к каждому ребенку</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Фокус на результат: мы отслеживаем динамику процесса обучения и отправляем результаты вам</span>
          </li>
          <li className="about-us-point">
            <span className="check"><FaCheck/></span>
            <span className="check-text">Гибкая система скидок, приятные бонусы и акции🎁🎁</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AdvantagesSection;
