import './PricesSection.css';
import PriceCard from "../components/PriceCard";

const PricesSection = () => {
  return (
    <section className="prices-section">
      <div className="prices-wrapper">
        <PriceCard>
          <div className="price-wrapper">
            <div className="price-header"><p>Знания 2.0</p></div>
            <ul className="plan-description">
              <li className="price-point">Видеоуроки</li>
              <li className="price-point">Электронная библиотека</li>
              <li className="price-point">Упражнения для самопроверки</li>
              <li className="price-point">Вся школьная программа с 1 по 11 класс по ФГОС</li>
            </ul>
            <div className="price">
              <div className="crossed-price">2400 R</div>
              <div className="actual-price">от 1900 R</div>
            </div>
          </div>
        </PriceCard>

        <PriceCard>
          <div className="price-wrapper">
            <div className="price-header"><p>Знания 3.0</p></div>
            <ul className="plan-description">
              <li className="price-point">Все опции тарифа Знания 2.0</li>
              <li className="price-point">Онлайн занятия с учителем</li>
              <li className="price-point">Личный куратор</li>
              <li className="price-point">Проверка индивидуальных занятий</li>
            </ul>
            <div className="price">
              <div className="crossed-price">20 500 R</div>
              <div className="actual-price">от 16 500 R</div>
            </div>
          </div>
        </PriceCard>

        <PriceCard>
          <div className="price-wrapper">
            <div className="price-header"><p>Школа</p></div>
            <ul className="plan-description">
              <li className="price-point">Все опции тарифа Знания 3.0</li>
              <li className="price-point">Зачисление в школу</li>
              <li className="price-point">Промежуточная аттестация</li>
              <li className="price-point">Подготовка к ЕГЭ</li>
            </ul>
            <div className="price">
              <div className="crossed-price">22 500 R</div>
              <div className="actual-price">от 18 500 R</div>
            </div>
          </div>
        </PriceCard>

        <PriceCard>
          <div className="price-wrapper">
            <div className="price-header"><p>Персональный</p></div>
            <ul className="plan-description">
              <li className="price-point">Все опции тарифа Школа</li>
              <li className="price-point">Индивидуальные занятия</li>
              <li className="price-point">Гибкий подход к формату графику обучения</li>
              <li className="price-point">Решение олимпиадных задач</li>
            </ul>
            <div className="price">
              <div className="crossed-price">46 900 R</div>
              <div className="actual-price">от 25 500 R</div>
            </div>
          </div>
        </PriceCard>
      </div>
      <div className="call-to-action">
        <div className="call-to-action-btn-bg">
          <div className="call-to-action-btn">
            Записаться на занятие
          </div>
        </div>
      </div>
    </section>
  )
    ;
}

export default PricesSection;
