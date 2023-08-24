import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const { cca3 } = useParams();

  const [countryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((response) => response.json())
      .then((data) => {
        const countryData = data[0];
        setCountryDetail(countryData);
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
    nativeName,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = countryDetail;

  return (
    <>
      <button>← Back</button>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <h2>{name.common}</h2>
      <section className="container__detail__main__info">
        <span>Native Name: {nativeName?.common}</span>
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
            {borders.map((border, index) => (
              <div key={index}>{border}</div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
