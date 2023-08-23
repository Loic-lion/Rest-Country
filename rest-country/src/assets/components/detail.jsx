export default function Detail() {
  return (
    <>
      <button>← Back</button>
      <img src="" alt="Image du drapeau de..." />
      <h2>Nom du pays</h2>
      <section className="container__detail__main__info">
        <span>Native Name: </span>
        <span>Population: </span>
        <span>Region: </span>
        <span>Sub Region: </span>
        <span>Capital: </span>
      </section>
      <section className="container__detail__second__info">
        <span>Top Level Domain: </span>
        <span>Currencies: </span>
        <span>Languages: </span>
      </section>
      <section className="container__detail__border__countries">
        <h3>Border Countries: </h3>
      </section>
    </>
  );
}
