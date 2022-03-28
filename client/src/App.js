import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from "./pages/MainPage";
import CoursePage from "./pages/CoursePage";
import PaymentPage from "./pages/PaymentPage";

// Icons
import englishIcon from "./img/englishIcon.png";
import turkishLanguageIcon from "./img/turkish.png";
import mentalArithmeticIcon from "./img/mentalArithmeticIcon.png";
import cultureIcon from "./img/cultureIcon.png";
import preSchoolIcon from "./img/preSchoolIcon.png";
import speedReadingIcon from "./img/speedReadingIcon.png";
import chessIcon from "./img/chessIcon.png";

// BGs
import englishBg from "./img/englishBg.jpeg";
import turkishLanguageBg from "./img/turkishBg.jpeg";
import mentalArithmeticBg from "./img/abacusBg.jpeg";
import cultureBg from "./img/cultureBg.jpeg";
import preSchoolBg from "./img/handsBg.jpeg";
import speedReadingBg from "./img/teacherBookBg.jpeg";
import chessBg from "./img/chessBg.jpeg";

import './App.css';

function App() {
  const courses = [
    {
      id: "turkish-language",
      link: '/course/turkish-language',
      title: "Курс турецкого языка",
      shortDescription: "Опытные педагоги найдут подход и помогут преодолеть языковой барьер.",
      description: "Вы научитесь:\n" +
        "\t - читать тексты на турецком языке;\n" +
        "\t - Понимать речь на слух;\n" +
        "\t - Применять турецкий язык в работе, учебе и путешествиях.\n\n" +
        "Занятия длится: 45 минут\n" +
        "Пробный урок: от 3 евро/5 долларов\n\n" +
        "В ходе обучения вы познакомитесь с турецким алфавитом, " +
        "базовой лексикой турецкого языка и овладеете основами турецкой грамматики.\n",
      icon: turkishLanguageIcon,
      hidePrice: true,
      plans: true,
      prices: [{
        id: 1,
        lessons: 8,
        price: 11200,
      }, {
        id: 2,
        lessons: 16,
        price: 19200,
      }, {
        id: 3,
        lessons: 30,
        price: 33000,
      }],
      background: turkishLanguageBg,
      blockPosition: {
        x: 55,
        y: 20,
      },
      pricePosition: {
        x: 50,
      },
      blockBackground: "#ecba4b",
      backgroundPosition: "left center",
      backgroundColor: "#3b615e"
    },
    {
      id: "english",
      link: "/course/english",
      title: "Курс английского языка",
      shortDescription: "Опытные педагоги найдут подход и помогут преодолеть языковой барьер.",
      description:
        "У нас:\n" +
        "\t - Обучение взрослых и детей;\n" +
        "\t - Учителя с любой точки мира;\n" +
        "\t - Английский для переезда, путешествий, повышения уровня или обучения с нуля.\n\n" +
        "Занятия длится: 45 минут\n" +
        "Пробный урок: от 3 евро/5 долларов\n\n" +
        "Где бы вы не находились, вам необходим интернет, компьютер или планшет. " +
        "Подберём удобное для вас время и поможем достичь результата. У нас ломаются языковые барьеры.\n",
      icon: englishIcon,
      plans: true,
      ruPrice: false,
      prices: [{
        id: 1,
        lessons: 4,
        price: "",
        priceUs: 54,
        priceEu: 48,
      }, {
        id: 2,
        lessons: 8,
        price: "",
        priceUs: 105,
        priceEu: 95,
      }, {
        id: 3,
        lessons: 10,
        price: "",
        priceUs: 125,
        priceEu: 110,
      }],
      background: englishBg,
      blockPosition: {
        x: 50,
        y: 20,
      },
      pricePosition: {
        x: 49,
      },
      blockBackground: "#daa754",
      backgroundPosition: "left bottom",
      backgroundColor: "#697889"
    },
    {
      id: "mental-arithmetic",
      link: '/course/mental-arithmetic',
      title: "Курс ментальная арифметика",
      shortDescription: "Наши специалисты помогут комплексному развитию ребенка.",
      description: "На нашей платформе  ребенок обучится: \n" +
        "\t - Основам математики; \n" +
        "\t - Быстро складывать,вычитать делить, и умножать в уме;\n" +
        "\t - Решать логические и математические задачи. \n\n" +
        "Занятия длится: 45 минут\n" +
        "Пробный урок: Бесплатный\n\n" +
        "Опытные педагоги через игры и индивидуальный подход обучат вашего ребенка многозадачности, " +
        "организованности и замотивируют на любовь к счёту и обучению.",
      icon: mentalArithmeticIcon,
      plans: true,
      ruPrice: false,
      prices: [{
        id: 1,
        lessons: 4,
        price: 4000,
        priceUs: 54,
        priceEu: 46,
      }, {
        id: 2,
        lessons: 8,
        price: 7200,
        priceUs: 100,
        priceEu: 85,
      }, {
        id: 3,
        lessons: 16,
        price: 12800,
        priceUs: 170,
        priceEu: 150,
      }, {
        id: 4,
        lessons: 30,
        price: 22500,
        priceUs: 297,
        priceEu: 270,
      }],
      background: mentalArithmeticBg,
      blockPosition: {
        x: 5,
        y: 25,
      },
      pricePosition: {
        x: 5,
      },
      blockBackground: "#ebd780",
      backgroundPosition: "right bottom",
      backgroundColor: "#97afc0"
    },
    {
      id: "pre-school",
      link: '/course/pre-school',
      title: "Подготовка к школе",
      shortDescription: "Наши специалисты помогут вашему ребенку обрести базовые знания по предметам.",
      description: "Образовательный курс разработан для детей с 5 лет.\n" +
        "Поможем вашему ребенку обрести базовые знания по предметам. \n\n" +
        "Преимущества курса: \n" +
        "\t - Занятия проходят на интерактивной платформе в игровом формате; \n" +
        "\t - Индивидуальный подход к каждому ребенку; \n" +
        "\t - Подготовка к школе без стресса и с интересом ",
      icon: preSchoolIcon,
      plans: true,
      ruPrice: true,
      prices: [{
        id: 1,
        lessons: 8,
        price: 7900,
      }, {
        id: 2,
        lessons: 16,
        price: 14900,
      }, {
        id: 3,
        lessons: 24,
        price: 19900,
      }],
      background: preSchoolBg,
      blockPosition: {
        x: 10,
        y: 15,
      },
      pricePosition: {
        x: 20,
      },
      blockBackground: "#ecd15c",
      backgroundPosition: "right top",
      backgroundColor: "#d9d0a5"
    },
    {
      id: "speed-reading",
      link: '/course/speed-reading',
      title: "Курс скорочтение",
      shortDescription: "Наш курс по скорочтению поможет вашему малышу полюбить книги и сделать этот процесс увлекательным и познавательным!",
      description: "Полюбить чтение – легко! С помощью курса:\n" +
        "\t - Ребенок расширит свой кругозор;\n" +
        "\t - Научится запоминать в больше;\n" +
        "\t - Сможет понимать прочитанное.\n\n" +
        "Занятия длится: 45 минут\n" +
        "Пробный урок: Бесплатный\n\n" +
        "Быстро учить стихи, легко работать с новым текстом и делиться с друзьями прочитанным – " +
        "на курсе по скорочтению опытные педагоги помогут вашему ребёнку справиться с этими задачами.",
      warning: "Продолжительность одного занятия: 45 минут\n",
      icon: speedReadingIcon,
      plans: true,
      // price: 7900,
      // price: "",
      ruPrice: false,
      prices: [{
        id: 1,
        lessons: 5,
        price: 3850,
        priceUs: 51,
        priceEu: 44,
      }, {
        id: 2,
        lessons: 10,
        price: 7200,
        priceUs: 95,
        priceEu: 85,
      }, {
        id: 3,
        lessons: 15,
        price: 9600,
        priceUs: 126,
        priceEu: 110,
      }, {
        id: 3,
        lessons: 20,
        price: 11400,
        priceUs: 150,
        priceEu: 130,
      }],
      background: speedReadingBg,
      blockPosition: {
        x: 50,
        y: 12,
      },
      pricePosition: {
        x: 40,
      },
      blockBackground: "#99b3c2",
      backgroundPosition: "left bottom",
      backgroundColor: "#a09c8d"
    },
    {
      id: "chess",
      link: '/course/chess',
      title: "Курс шахматы",
      shortDescription: "Обучение на игровой платформе, соревнования с детьми по всему миру.",
      description: "Шахматы с нами это: \n" +
        "\t - Обучение на игровой платформе индивидуальный подход;\n" +
        "\t - Методические материалы для каждого;\n" +
        "\t - Персонально бонусы за победы соревнования с детьми по всему миру.\n\n" +
        "Занятия длится: 45 минут\n" +
        "Пробный урок: Бесплатный\n\n" +
        "Вам нужен: интернет, компьютер или планшет. " +
        "Базовые стратегии игры, отработки приёмов с личным педагогом, игры на внимание и память - основа нашего курса.",
      icon: chessIcon,
      plans: true,
      ruPrice: false,
      prices: [{
        id: 1,
        lessons: 4,
        price: 4000,
        priceUs: 54,
        priceEu: 46,
      }, {
        id: 2,
        lessons: 8,
        price: 7900,
        priceUs: 105,
        priceEu: 95,
      }, {
        id: 3,
        lessons: 24,
        price: 14400,
        priceUs: 190,
        priceEu: 165,
      }],
      background: chessBg,
      blockPosition: {
        x: 48,
        y: 20,
      },
      pricePosition: {
        x: 50,
      },
      blockBackground: "#edd2a3",
      backgroundPosition: "left bottom",
      backgroundColor: "#1a4242"
    },
    {
      id: "culture",
      link: '/course/culture',
      title: "Курс мировая художественная культура",
      shortDescription: "Курс по мировой художественной культуры от первобытности до наших дней.",
      description: "Культура от нас для взрослых и детей представляет:\n" +
        "\t - увлекательный и познавательный материал на интерактивной платформе;\n" +
        "\t - Развитие эрудиции, памяти и критического мышления;\n" +
        "\t - Загадки, мифы, обычаи и традиции разных стран мира.\n\n" +
        "Занятия длится: 45 минут\n" +
        "Пробный урок: Бесплатный\n\n" +
        "Культурные особенности  всех стран мира станут интересными и доступными для понимания. " +
        "Развитие памяти, погружение в искусство, умение подмечать детали – этому всему мы научим вас и вашего ребенка.",
      icon: cultureIcon,
      plans: false,
      ruPrice: false,
      price: 6000,
      priceUs: 80,
      priceEu: 70,
      background: cultureBg,
      blockPosition: {
        x: 55,
        y: 15,
      },
      pricePosition: {
        x: 50,
      },
      blockBackground: "#fcf6b8",
      backgroundPosition: "left bottom",
      backgroundColor: "#b7b7bc"
    },
  ]

  return (
    <Router>
      <Routes>
        <Route element={<MainPage courses={courses}/>}
               path="*"/>
        <Route element={<CoursePage courses={courses}/>}
               path="/course/:courseId"/>
        <Route element={<PaymentPage courses={courses}/>}
               path="/payment/:courseId/:number"/>
      </Routes>
    </Router>
  );
}

export default App;
