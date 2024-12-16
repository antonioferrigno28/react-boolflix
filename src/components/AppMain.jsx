import Films from "./Films.jsx";

export default function AppMain({ showTitle, movies }) {
  return (
    <main>
      <div className="container">
        {showTitle && (
          <>
            <Films movies={movies} />
          </>
        )}
      </div>
    </main>
  );
}
