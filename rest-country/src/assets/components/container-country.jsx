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
    <Link to={`/detail/${cca3}`}>
      <div className="container__country">
        <img src={flags} alt={`Flag of ${name}`} />
        <h2>{name}</h2>
        <span>Population: {population}</span>
        <span>Region: {region}</span>
        <span>Capital: {capital}</span>
      </div>
    </Link>
  );
}
