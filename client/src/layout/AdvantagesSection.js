import './AdvantagesSection.css';
import Card from "../components/Card";
import handsIcon from "../img/handsIcon.jpeg"
import movieIcon from "../img/movieIcon.jpeg"
import paperIcon from "../img/paperIcon.jpeg"
import compassIcon from "../img/compassIcon.jpeg"
import lampIcon from "../img/lampIcon.jpeg"
import fireIcon from "../img/fireIcon.jpeg"

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
      <div className="cards-header">
        <h2>Преимущества Золотого Компаса</h2>
        <div className="advantages-header-bg"/>
      </div>
      <div className="cards-wrapper">

        <Card>
          <div className="card-img"><img src={movieIcon} alt=""/></div>
          <div className="card-header"><p>Онлайн-уроки</p></div>
          <div className="card-text"><p>Проходят в формате вебинаров и остаются в записи. Живое общение учителя с
            классом</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={handsIcon} alt=""/></div>
          <div className="card-header"><p>Лучшие преподаватели</p></div>
          <div className="card-text"><p>Преподаватели лучших школ и вузов России. Методическая поддержка ФИПИ и
            университета "Синергия"</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={paperIcon} alt=""/></div>
          <div className="card-header"><p>Мониторинг обучения</p></div>
          <div className="card-text"><p>Отчеты успеваемости для детей и родителейю Электронный журнал и дневник</p>
          </div>
        </Card>

        <Card>
          <div className="card-img"><img src={compassIcon} alt=""/></div>
          <div className="card-header"><p>Команда поддержки</p></div>
          <div className="card-text"><p>Персональный куратор, наставники, модераторы, психолог</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={lampIcon} alt=""/></div>
          <div className="card-header"><p>Поступи в ВУЗ мечты</p></div>
          <div className="card-text"><p>Эффективный путь к поступлению в лучшие вузыб полный цикл подготовки</p></div>
        </Card>

        <Card>
          <div className="card-img"><img src={fireIcon} alt=""/></div>
          <div className="card-header"><p>Поступи в ВУЗ мечты</p></div>
          <div className="card-text"><p>Учитесь когда вам удобно. Записи прошедших уроков и контент доступны 24/7</p>
          </div>
        </Card>

      </div>

    </section>
  );
}

export default AdvantagesSection;
