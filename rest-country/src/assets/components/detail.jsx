import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/detail.css";

export default function Detail({ isDarkMode }) {
  const { cca3 } = useParams();

  const [countryDetail, setCountryDetail] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];
        console.log(countryData);
        setCountryDetail(countryData);
        const { borders } = countryData;
        if (borders && borders.length > 0) {
          Promise.all(
            borders.map((border) =>
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            )
          )
            .then((responses) =>
              Promise.all(responses.map((response) => response.json()))
            )
            .then((borderData) => {
              setBorderCountries(borderData.map((data) => data[0]));
            })
            .catch((error) => console.error("Error border countries:", error));
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [cca3]);

  if (!countryDetail) {
    return <div>Loading...</div>;
  }

  const {
    name,
    population,
    region,
    capital,
    flags,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = countryDetail;

  const nativeNameKeys = Object.keys(name.nativeName);
  const lastCommonKey = nativeNameKeys[nativeNameKeys.length - 1];
  const lastCommonName = name.nativeName[lastCommonKey].common;

  return (
    <div className={`country ${isDarkMode ? "dark__mode" : ""}`}>
      <Link to={`/`}>
        <button className={`${isDarkMode ? "dark__mode" : ""}`}>← Back</button>
      </Link>
      <section className="country__container">
        <img src={flags.svg} alt={`Flag of ${name.common}`} />
        <div className="country__container__detail">
          <h2>{name.common}</h2>
          <div className="country__container__detail__info">
            <article className="country__container__detail__info__stat">
              <span>Native Name: {lastCommonName}</span>
              <span>Population: {population}</span>
              <span>Region: {region}</span>
              <span>Sub Region: {subregion}</span>
              <span>Capital: {capital[0]}</span>
            </article>
            <article className="country__container__detail__info__stat">
              <span>Top Level Domain: {tld[0]}</span>
              <span>
                Currencies:{" "}
                {Object.values(currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </span>
              <span>Languages: {Object.values(languages).join(", ")}</span>
            </article>
          </div>
          {borders && borders.length > 0 && (
            <article className="country__container__detail__border__countries">
              <span>Border Countries: </span>
              <div className="country__container__detail__border__countries__container">
                {borderCountries.map((border, index) => (
                  <div
                    className={`country__container__detail__border__countries__container__stack ${
                      isDarkMode ? "dark__mode" : ""
                    }`}
                    key={index}
                  >
                    {border.name.common}
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>
    </div>
  );
}
