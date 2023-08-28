import React from "react";
import FullMoon from "../img/moon-solid.svg";
import DemiMoon from "../img/moon-regular.svg";
import "../css/header.css";

export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={isDarkMode ? "dark__mode" : ""}>
      <h1>Where in the world?</h1>
      <div className="container__dark__mode">
        <img
          src={isDarkMode ? DemiMoon : FullMoon}
          alt="icone du dark mode"
          className="container__dark__mode__moon"
        />
        <button
          className={`container__dark__mode__switch ${
            isDarkMode ? "dark__mode" : ""
          }`}
          onClick={toggleDarkMode}
        >
          Dark Mode
        </button>
      </div>
    </header>
  );
}
