import { Link } from "react-router-dom";

export default function ContainerCountry({
  name,
  population,
  region,
  capital,
  flags,
  cca3,
}) {
  return (
    <div className="container__country">
      <img src={flags} alt={`Flag of ${name}`} />
      <Link to={`/detail/${cca3}`}>
        <h2>{name}</h2>
      </Link>
      <span>Population: {population}</span>
      <span>Region: {region}</span>
      <span>Capital: {capital}</span>
    </div>
  );
}
