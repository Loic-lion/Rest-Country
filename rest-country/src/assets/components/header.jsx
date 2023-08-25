import FullMoon from "../img/moon-solid.svg";
import "../css/header.css";
export default function Header() {
  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <div className="container__dark__mode">
          <img
            src={FullMoon}
            alt="icone du dark mode"
            className="container__dark__mode__moon"
          />
          <button className="container__dark__mode__switch">Dark Mode</button>
        </div>
      </header>
    </>
  );
}
