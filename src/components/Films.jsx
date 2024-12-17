export default function Films({ movies }) {
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
                  <h3 className="card-title">{movie.title}</h3>
                  <h6 className="card-subtitle mb-2">{movie.original_title}</h6>
                  <div>{movie.overview}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
