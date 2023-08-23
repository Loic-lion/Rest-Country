import FullMoon from "../img/moon-solid.svg";
import "../css/header.css";
export default function Header() {
  return (
    <>
      <header>
        <h1>Where in the world?</h1>
        <div>
          <img src={FullMoon} alt="icone du dark mode" />
          <button>Dark Mode</button>
        </div>
      </header>
    </>
  );
}
