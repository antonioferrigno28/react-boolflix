export default function TvSeries({
  tvSeries,
  Flag,
  languageFlag,
  renderstars,
}) {
  return (
    <div className="pb-5">
      <h1 className="text-white">Serie Tv</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {tvSeries.map((tvSerie) => (
          <div className="tvSerie col" key={tvSerie.id}>
            <div className="card tvSerie-card h-100">
              <div className="tvSerie-img-container">
                <img
                  src={`https://image.tmdb.org/t/p/w342${tvSerie.poster_path}`}
                  alt=""
                  className="card-img-top tvSerie-img"
                  style={{ height: "500px", objectFit: "cover" }}
                />
              </div>
              <div className="card-body tvSerie-info">
                <div className="d-flex">
                  <h3 className="card-title me-2 netflix-text">Titolo:</h3>
                  <h3 className="card-title">{tvSerie.name}</h3>
                </div>
                <h6 className="card-subtitle mb-2">{tvSerie.original_name}</h6>
                <div>{tvSerie.overview}</div>
                <div>
                  <span>
                    <p>Lingua:</p>
                  </span>
                  <Flag
                    code={languageFlag[tvSerie.original_language] || null}
                    style={{ width: 30, height: 30 }}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <h3 className="card-title me-2 netflix-text">Voto:</h3>
                  <span className="ms-2">
                    {Math.round(tvSerie.vote_average / 2)}
                  </span>
                  <span className="ps-2">
                    {" "}
                    {renderstars(tvSerie.vote_average)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
