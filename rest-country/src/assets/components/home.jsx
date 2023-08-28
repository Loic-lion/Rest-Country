import Loupe from "../img/magnifying-glass-solid.svg";
import BlackLoupe from "../img/Search_Magnifying_Glass.svg";
import React, { useState, useEffect } from "react";
import ContainerCountry from "./container-country";
import "../css/home.css";

export default function Home({ isDarkMode }) {
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetch("../../data.json")
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error("Erreur :", error));
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    const formattedSearchTerm =
      searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    const filtered = countries.filter((country) =>
      country.name.common.includes(formattedSearchTerm)
    );
    setFilteredCountries(filtered);
  }

  function filterSearch(selectedRegion) {
    if (selectedRegion === "") {
      setFilteredCountries(countries);
    } else {
      const filteredRegions = countries.filter((country) =>
        country.region.includes(selectedRegion)
      );
      setFilteredCountries(filteredRegions);
    }
  }
  return (
    <>
      <div className="search">
        <form
          onSubmit={handleSearch}
          name="searchbar"
          className={`search__bar ${isDarkMode ? "dark__mode" : ""}`}
        >
          <button type="submit" className={`${isDarkMode ? "dark__mode" : ""}`}>
            <img
              src={isDarkMode ? BlackLoupe : Loupe}
              alt="icon for the searchbar"
            />
          </button>
          <input
            type="text"
            className={`${isDarkMode ? "dark__mode" : ""}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a country..."
          />
        </form>

        <select
          className={`search__filter ${isDarkMode ? "dark__mode" : ""}`}
          onChange={(e) => filterSearch(e.target.value)}
        >
          <option disabled selected>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="container__countries">
        {filteredCountries.map((country, index) => (
          <ContainerCountry
            isDarkMode={isDarkMode}
            key={index}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={
              country.capital && country.capital.length > 0
                ? country.capital[0]
                : ""
            }
            flags={country.flags.png}
            cca3={country.cca3}
          />
        ))}
      </div>
    </>
  );
}
