import { Link } from "react-router-dom";
import "../css/container-country.css";

export default function ContainerCountry({
  name,
  isDarkMode,
  population,
  region,
  capital,
  flags,
  cca3,
}) {
  return (
    <div
      className={`container__countries__country ${
        isDarkMode ? "dark__mode" : ""
      }`}
    >
      <img src={flags} alt={`Flag of ${name}`} />
      <section className="container__countries__country__container">
        <Link
          to={`/detail/${cca3}`}
          className={`${isDarkMode ? "dark__mode" : ""}`}
        >
          <h2>{name}</h2>
        </Link>

        <span className="container__countries__country__container__info">
          <p className="container__countries__country__container__info__weight">
            Population:
          </p>
          <p className="container__countries__country__container__info__normal">
          {population.toLocaleString("en-US")}
          </p>
        </span>
        <span className="container__countries__country__container__info">
          <p className="container__countries__country__container__info__weight">
            Region:
          </p>
          <p className="container__countries__country__container__info__normal">
            {region}
          </p>
        </span>
        <span className="container__countries__country__container__info">
          <p className="container__countries__country__container__info__weight">
            Capital:
          </p>
          <p className="container__countries__country__container__info__normal">
            {capital}
          </p>
        </span>
      </section>
    </div>
  );
}
