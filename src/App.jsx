import { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import AppHeader from "./components/AppHeader";
import "./App.css";

function App() {
  const { movies, fetchMovies, tvSeries, fetchTvSeries } =
    useContext(GlobalContext);

  return <AppHeader />;
}

export default App;
