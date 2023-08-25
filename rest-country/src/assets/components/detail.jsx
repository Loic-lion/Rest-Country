import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Detail() {
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
            .catch((error) =>
              console.error("Error fetching border countries:", error)
            );
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
    altSpellings,
  } = countryDetail;

  const nativeNameKeys = Object.keys(name.nativeName);
  const lastCommonKey = nativeNameKeys[nativeNameKeys.length - 1];
  const lastCommonName = name.nativeName[lastCommonKey].common;

  return (
    <>
      <Link to={`/`}>
        <button>← Back</button>
      </Link>
      <img src={flags.svg} alt={`Flag of ${name.common}`} />
      <h2>{name.common}</h2>
      <section className="container__detail__main__info">
        <section className="container__detail__main__info">
          <span>Native Name: {lastCommonName}</span>
        </section>
        <span>Population: {population}</span>
        <span>Region: {region}</span>
        <span>Sub Region: {subregion}</span>
        <span>Capital: {capital[0]}</span>
      </section>
      <section className="container__detail__second__info">
        <span>Top Level Domain: {tld[0]}</span>
        <span>
          Currencies:{" "}
          {Object.values(currencies)
            .map((currency) => currency.name)
            .join(", ")}
        </span>
        <span>Languages: {Object.values(languages).join(", ")}</span>
      </section>
      {borders && borders.length > 0 && (
        <section className="container__detail__border__countries">
          <h3>Border Countries: </h3>
          <div>
            {borderCountries.map((border, index) => (
              <div key={index}>{border.name.common}</div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
