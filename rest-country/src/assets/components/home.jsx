import Loupe from "../img/magnifying-glass-solid.svg";
import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <div>
        <img src={Loupe} alt="image de loupe pour la bar de recherche" />
        <input
          type="text"
          id="search__country"
          placeholder="Search for a country..."
        />
      </div>
      <select>
        <option value="" selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}
