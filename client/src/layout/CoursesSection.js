import './CoursesSection.css';
import Card from "../components/Card";
import handsIcon from "../img/handsIcon.jpeg"
import movieIcon from "../img/movieIcon.jpeg"
import paperIcon from "../img/paperIcon.jpeg"
import compassIcon from "../img/compassIcon.jpeg"
import lampIcon from "../img/lampIcon.jpeg"
import fireIcon from "../img/fireIcon.jpeg"
import questionIcon from "../img/questionIcon.jpeg"
import teacherIcon from "../img/teacherIcon.jpeg"

const CoursesSection = () => {
  return (
    <section className="courses-section" id="courses">
      <div className="cards-header">
        <h2>Наши курсы</h2>
        <div className="courses-header-bg"/>
      </div>
      <div className="cards-wrapper">

        <Card>
          <div className="card-img teacher"><img src={teacherIcon} alt=""/></div>
          <div className="card-header"><p>Подготовка к школе</p></div>
          <div className="card-text"><p>Занятия проводят опытные, дипломированные специалисты;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={questionIcon} alt=""/></div>
          <div className="card-header"><p>Логопедия</p></div>
          <div className="card-text"><p>Для занятий не нужно никуда ехать, достаточно планшета или компьютера;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={paperIcon} alt=""/></div>
          <div className="card-header"><p>Ментальная арифметика</p></div>
          <div className="card-text"><p>Мы ценим ваше время ⌛ и подберем удобное для вас расписание занятий;</p>
          </div>
        </Card>

        <Card>
          <div className="card-img"><img src={lampIcon} alt=""/></div>
          <div className="card-header"><p>Английский язык</p></div>
          <div className="card-text"><p>Наши методики делают обучение интересным и максимально эффективным;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={fireIcon} alt=""/></div>
          <div className="card-header"><p>Скорочтение</p></div>
          <div className="card-text"><p>Наша программа постоянно совершенствуется, чтобы оставаться интересной для учеников и их родителей;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={handsIcon} alt=""/></div>
          <div className="card-header"><p>Шахматы</p></div>
          <div className="card-text"><p>В нашей школе, мы предлагаем ндивидуальный подход к каждому ребенку;</p>
          </div>
        </Card>

        <Card>
          <div className="card-img"><img src={movieIcon} alt=""/></div>
          <div className="card-header"><p>Мировая культура</p></div>
          <div className="card-text"><p>Фокус на результат: мы отслеживаем динамику процесса обучения и отправляем результаты вам;</p>
          </div>
        </Card>

        <Card>
          <div className="card-img"><img src={compassIcon} alt=""/></div>
          <div className="card-header"><p>География и космос</p></div>
          <div className="card-text"><p>Гибкая система скидок, приятные бонусы и акции🎁🎁</p>
          </div>
        </Card>

      </div>

    </section>
  );
}

export default CoursesSection;
