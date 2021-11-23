import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainPage from "./pages/MainPage";
import CoursePage from "./pages/CoursePage";

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainPage/>}
               path="*"/>
        <Route element={<CoursePage/>}
               path="/course/:courseId"/>
      </Routes>
    </Router>
  );
}

export default App;
