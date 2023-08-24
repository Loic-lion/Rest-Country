export default function Detail(
  name,
  population,
  region,
  capital,
  flags,
  nativeName,
  subregion,
  tld,
  languages,
  currencies,
  borders
) {
  return (
    <>
      <button>← Back</button>
      <img src={flags} alt={`Flag of ${name}`} />
      <h2>{name}</h2>
      <section className="container__detail__main__info">
        <span>Native Name: {nativeName}</span>
        <span>Population: {population}</span>
        <span>Region: {region}</span>
        <span>Sub Region: {subregion}</span>
        <span>Capital: {capital}</span>
      </section>
      <section className="container__detail__second__info">
        <span>Top Level Domain: {tld}</span>
        <span>Currencies: {currencies.name}</span>
        <span>Languages: {languages}</span>
      </section>
      <section className="container__detail__border__countries">
        <h3>Border Countries: </h3>
        <div>
          {borders.map((border, index) => (
            <div key={index}>{border}</div>
          ))}
        </div>
      </section>
    </>
  );
}
