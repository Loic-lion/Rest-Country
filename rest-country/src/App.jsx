import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/header";
import Home from "./assets/components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./assets/components/detail";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark__mode" : ""}`}>
      <Router>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route
            path="/detail/:cca3"
            element={<Detail isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
