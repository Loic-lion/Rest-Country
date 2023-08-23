export default function ContainerCountry({
  name,
  population,
  region,
  capital,
  flags,
}) {
  return (
    <div className="container__country">
      <img src={flags} alt={`Flag of ${name}`} />
      <h2>{name}</h2>
      <span>Population: {population}</span>
      <span>Région: {region}</span>
      <span>Capitale: {capital}</span>
    </div>
  );
}
