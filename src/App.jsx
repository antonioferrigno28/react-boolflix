import { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showTitle, setShowTitles] = useState(false);
  const { movies, fetchMovies, tvSeries, fetchTvSeries } =
    useContext(GlobalContext);

  function handleInput(e) {
    const dataSearch = e.target.value;
    setSearchQuery(dataSearch);
  }

  function handleSubmit() {
    if (searchQuery !== "") {
      fetchMovies(searchQuery);
      fetchTvSeries(searchQuery);
      setShowTitles(true);
    }
  }

  return (
    <>
      <AppHeader
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
      />

      <AppMain showTitle={showTitle} movies={movies} />
    </>
  );
}

export default App;
