import React, {useEffect, useState} from "react";

import Header from "./layout/Header";
import IntroductionSection from "./layout/IntroductionSection";
import AdvantagesSection from "./layout/AdvantagesSection";
import CoursesSection from "./layout/CoursesSection";
import BottomSection from "./layout/BottomSection";
import ContactButton from "./layout/ContactButton";

import './App.css';

function App() {
  const appRef = React.createRef();

  const [scrollTop, setScrollTop] = useState();
  const [appHeight, setAppHeight] = useState();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.scrollTop);
    };
    let app = appRef.current;
    if (app) app.addEventListener("scroll", onScroll);
    return () => app.removeEventListener("scroll", onScroll);

  }, [scrollTop, appRef]);

  useEffect(() => {
    setAppHeight(appRef.current.clientHeight)
  }, [appRef]);

  return (
    <div className="app" ref={appRef}>
      <Header offset={scrollTop} appHeight={appHeight}/>
      <IntroductionSection/>
      <AdvantagesSection/>
      <CoursesSection/>
      <BottomSection/>
      <ContactButton/>
    </div>
  );
}

export default App;
