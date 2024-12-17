import Films from "./Films";
import TvSeries from "./TvSeries.jsx";

export default function AppMain({ showTitle, movies, tvSeries }) {
  return (
    <main>
      <div className="container">
        {showTitle && (
          <>
            <Films movies={movies} />
            <TvSeries tvSeries={tvSeries} />
          </>
        )}
      </div>
    </main>
  );
}
