import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from "./pages/MainPage";
import CoursePage from "./pages/CoursePage";
import PaymentPage from "./pages/PaymentPage";

// Icons
import englishIcon from "./img/englishIcon.png";
import speechTherapyIcon from "./img/speechTherapyIcon.png";
import mentalArithmeticIcon from "./img/mentalArithmeticIcon.png";
import cultureIcon from "./img/cultureIcon.png";
import preSchoolIcon from "./img/preSchoolIcon.png";
import speedReadingIcon from "./img/speedReadingIcon.png";
import chessIcon from "./img/chessIcon.png";

// BGs
import englishBg from "./img/englishBg.jpeg";
import speechTherapyBg from "./img/lampBg.jpeg";
import mentalArithmeticBg from "./img/abacusBg.jpeg";
import cultureBg from "./img/cultureBg.jpeg";
import preSchoolBg from "./img/handsBg.jpeg";
import speedReadingBg from "./img/teacherBookBg.jpeg";
import chessBg from "./img/chessBg.jpeg";

import './App.css';

function App() {
  const courses = [
    {
      id: "english",
      link: "/course/english",
      title: "Английский язык",
      shortDescription: "Опытные педагоги найдут подход к вашему ребенку и помогут преодолеть языковой барьер.",
      description: "Онлайн-уроки английского для детей.\n" +
        "Образовательный курс разработан для детей с 5 лет.\n" +
        "Занятия английским в удобное время с компьютера или планшета.\n\n" +
        "Учим в процессе игры. Наши преподаватели помогут поставить цели в обучении языка и помогут их достичь. \n\n" +
        "Преимущества занятий с нашей школой: \n" +
        "\t - Не нужно никуда ходить; \n" +
        "\t - Нужен только интернет; \n" +
        "\t - Отправляем отчеты родителям; \n" +
        "\t - Не нужно покупать дополнительные учебники и пособия - все есть на нашей платформе; \n" +
        "\t - Опытные педагоги найдут подход к вашему ребенку и помогут преодолеть языковой барьер. ",
      icon: englishIcon,
      plans: true,
      prices: [{
        id: 1,
        lessons: 4,
        price: 4000,
      }, {
        id: 2,
        lessons: 8,
        price: 7900,
      }, {
        id: 3,
        lessons: 24,
        price: 19900,
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
      id: "speech-therapy",
      link: '/course/speech-therapy',
      title: "Логопедия",
      shortDescription: "Наши специалисты поставят, автоматизируют и скорректируют произношение звуков;",
      description: "Образовательный курс разработан для детей с 4 лет.\n" +
        "Мы используем интегративный подход в логопедии.\n" +
        "Интегративная логопедия - это объединение большого пласта наук, где главное место занимают науки о головном мозге, его работе, а также мозговой организации речи. Это нейропсихология, нейрологопедия, нейролингвистика, нейрофизиология.\n\n" +
        "Научим ребенка понятно и правильно разговаривать. Наши специалисты поставят автоматизируют и скорректируют произношение звуков.\n\n",
      icon: speechTherapyIcon,
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
      background: speechTherapyBg,
      blockPosition: {
        x: 55,
        y: 20,
      },
      pricePosition: {
        x: 50,
      },
      blockBackground: "#ecba4b",
      backgroundPosition: "left bottom",
      backgroundColor: "#3b615e"
    },
    {
      id: "mental-arithmetic",
      link: '/course/mental-arithmetic',
      title: "Ментальная арифметика",
      shortDescription: "Наши специалисты помогут комплексному развитию ребенка.",
      description: "Образовательный курс разработан для детей с 5 лет.\n" +
        "Занятия по ментальной арифметике в нашей школе помогают комплексному развитию ребенка. \n\n" +
        "В процессе занятия ребенок обучается: \n" +
        "\tБыстрому устному счету; \n" +
        "\tМногозадачности; \n" +
        "\tРазвитию нескольких видов памяти; \n" +
        "\tУсидчивости и организованности; \n" +
        "\tМотивации к обучению.",
      icon: mentalArithmeticIcon,
      plans: true,
      prices: [{
        id: 1,
        lessons: 4,
        price: 4000,
      }, {
        id: 2,
        lessons: 8,
        price: 7200,
      }, {
        id: 3,
        lessons: 16,
        price: 12800,
      }, {
        id: 4,
        lessons: 30,
        price: 22500,
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
      id: "culture",
      link: '/course/culture',
      title: "Мировая художественная культура",
      shortDescription: "Курс по мировой художественной культуры от первобытности до наших дней.",
      description: "Образовательная программа разработана для детей с 7 лет.\n" +
        "Представляем курс по мировой художественной культуре от первобытности до наших дней.\n\n" +
        "Задачи курса: \n" +
        "\t - Формирование мировоззрения; \n" +
        "\t - Погружение в мир искусства и исторических особенностей; \n" +
        "\t - Навык отмечать детали формирование культурной насмотренности у ребенка.",
      icon: cultureIcon,
      plans: false,
      price: 6000,
      background: cultureBg,
      blockPosition: {
        x: 55,
        y: 30,
      },
      pricePosition: {
        x: 50,
      },
      blockBackground: "#fcf6b8",
      backgroundPosition: "left bottom",
      backgroundColor: "#b7b7bc"
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
      title: "Скорочтение",
      shortDescription: "Наш курс по скорочтению поможет вашему малышу полюбить книги и сделать этот процесс увлекательным и познавательным!",
      description: "Образовательный курс разработан для детей с 6 лет.\n" +
        "Не знаете, как привить ребенку любовь к чтению? \n" +
        "Наш курс по скорочтению поможет вашему малышу полюбить книги и сделать этот процесс увлекательным и познавательным!\n" +
        "\n" +
        "Специалисты школы подберут методику, с помощью которой ребенок научится быстрому восприятию текста.\n" +
        "\n" +
        "Преимущества курса:\n" +
        "\t - Развитие памяти;\n" +
        "\t - Повышение интереса к учебной деятельности;\n" +
        "\t - Развитие концентрации и внимания;\n" +
        "\t - Формирование навыка оперативно решать поставленную задачу",
      icon: speedReadingIcon,
      plans: false,
      price: 7900,
      background: speedReadingBg,
      blockPosition: {
        x: 50,
        y: 20,
      },
      pricePosition: {
        x: 50,
      },
      blockBackground: "#99b3c2",
      backgroundPosition: "left bottom",
      backgroundColor: "#a09c8d"
    },
    {
      id: "chess",
      link: '/course/chess',
      title: "Шахматы",
      shortDescription: "Обучение на игровой платформе, соревнования с детьми по всему миру.",
      description: "Образовательный курс разработан для детей с 3 лет.\n" +
        "Шахматы являются одной из древнейших игр и видов спорта.\n" +
        "Преимущества курса: \n" +
        "\t - Обучение на игровой платформе индивидуальный подход;\n" +
        "\t - Методические материалы для каждого;\n" +
        "\t - Персонально бонусы за победы соревнования с детьми по всему миру",
      icon: chessIcon,
      plans: true,
      prices: [{
        id: 1,
        lessons: 4,
        price: 4800,
      }, {
        id: 2,
        lessons: 8,
        price: 7900,
      }, {
        id: 3,
        lessons: 24,
        price: 14400,
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
