import './AdvantagesSection.css';
import Card from "../components/Card";
import handsIcon from "../img/handsIcon.jpeg"
import movieIcon from "../img/movieIcon.jpeg"
import paperIcon from "../img/paperIcon.jpeg"
import compassIcon from "../img/compassIcon.jpeg"
import lampIcon from "../img/lampIcon.jpeg"
import fireIcon from "../img/fireIcon.jpeg"
import questionIcon from "../img/questionIcon.jpeg"
import teacherIcon from "../img/teacherIcon.jpeg"

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
      <div className="cards-header">
        <h2>Преимущества Золотого Компаса</h2>
        <div className="advantages-header-bg"/>
      </div>
      <div className="cards-wrapper">

        <Card>
          <div className="card-img teacher"><img src={teacherIcon} alt=""/></div>
          <div className="card-header"><p>Лучшие преподаватели</p></div>
          <div className="card-text"><p>Занятия проводят опытные, дипломированные специалисты;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={questionIcon} alt=""/></div>
          <div className="card-header"><p>Онлайн-уроки</p></div>
          <div className="card-text"><p>Для занятий не нужно никуда ехать, достаточно планшета или компьютера;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={paperIcon} alt=""/></div>
          <div className="card-header"><p>Гибкое рассписание</p></div>
          <div className="card-text"><p>Мы ценим ваше время ⌛ и подберем удобное для вас рассписание занятий;</p>
          </div>
        </Card>

        <Card>
          <div className="card-img"><img src={lampIcon} alt=""/></div>
          <div className="card-header"><p>Эффективное обучение</p></div>
          <div className="card-text"><p>Наши методики делают обучение интересным и максимально эффективным;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={fireIcon} alt=""/></div>
          <div className="card-header"><p>Интересная программа</p></div>
          <div className="card-text"><p>Наша программа постоянно совершенствуется, чтобы оставаться интересной для учеников и их родителей;</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={handsIcon} alt=""/></div>
          <div className="card-header"><p>Индивидуальный подход</p></div>
          <div className="card-text"><p>В нашей школе, мы предлагаем ндивидуальный подход к каждому ребенку;</p>
          </div>
        </Card>

        <Card>
          <div className="card-img"><img src={movieIcon} alt=""/></div>
          <div className="card-header"><p>Мониторинг обучения</p></div>
          <div className="card-text"><p>Фокус на результат: мы отслеживаем динамику процесса обучения и отправляем результаты вам;</p>
          </div>
        </Card>

        <Card>
          <div className="card-img"><img src={compassIcon} alt=""/></div>
          <div className="card-header"><p>Доступность</p></div>
          <div className="card-text"><p>Гибкая система скидок, приятные бонусы и акции🎁🎁</p>
          </div>
        </Card>

      </div>

    </section>
  );
}

export default AdvantagesSection;
