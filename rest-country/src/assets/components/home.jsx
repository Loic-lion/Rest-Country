import Loupe from "../img/magnifying-glass-solid.svg";
import React, { useState, useEffect } from "react";
import ContainerCountry from "./container-country";

export default function Home() {
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

  const handleSearch = () => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <div className="search__bar">
        <button onClick={handleSearch}>
          <img src={Loupe} alt="image de loupe pour la barre de recherche" />
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>

      <select defaultValue="">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <div>
        {filteredCountries.map((country, index) => (
          <ContainerCountry
            key={index}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flags={country.flags.svg}
          />
        ))}
      </div>
    </div>
  );
}
