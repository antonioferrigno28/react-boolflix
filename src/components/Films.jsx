export default function Films({ movies, renderstars, languageFlag, Flag }) {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-white">Film</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {movies.map((movie) => (
            <div className="movie col" key={movie.id}>
              <div className="card movie-card h-100">
                <div className="movie-img-container">
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt=""
                    className="card-img-top movie-img"
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body movie-info">
                  <div className="d-flex">
                    <h3 className="card-title me-2 netflix-text">Titolo:</h3>
                    <h3 className="card-title">{movie.title}</h3>
                  </div>
                  <div className="d-flex mt-2">
                    <h6 className="card-subtitle me-2 netflix-text">
                      Titolo originale:
                    </h6>
                    <h6 className="card-subtitle mb-2">
                      {movie.original_title}
                    </h6>
                  </div>

                  <div className="mt-2">
                    <h6 className="card-subtitle me-2 netflix-text">
                      Overview:{" "}
                    </h6>

                    {movie.overview}
                  </div>
                  <div className="d-flex align-content-center mt-2">
                    <h6 className="me-2 mt-1 netflix-text">Lingua:</h6>
                    <Flag
                      code={languageFlag[movie.original_language] || null}
                      style={{ width: 30, height: 30 }}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <h3 className="card-title me-2 netflix-text">Voto:</h3>
                    <span className="ms-2">
                      {Math.round(movie.vote_average / 2)}
                    </span>
                    <span className="ps-2">
                      {" "}
                      {renderstars(movie.vote_average)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
