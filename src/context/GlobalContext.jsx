import { createContext, useState } from "react";

export const GlobalContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY;

const URL_movie = `https://api.themoviedb.org/3/search/movie?api_key=d967bf2ba828b9cc05b0e616f645bb10&query=`;

const URL_tvseries = `https://api.themoviedb.org/3/search/tv?api_key=d967bf2ba828b9cc05b0e616f645bb10&query=`;

export const GlobalContextData = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  const fetchMovies = (searchQuery) => {
    fetch(`${URL_movie}${searchQuery}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta del film", error);
      });
  };

  const fetchTvSeries = (searchQuery) => {
    fetch(`${URL_tvseries}${searchQuery}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTvSeries(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta della serie tv", error);
      });
  };

  return (
    <GlobalContext.Provider
      value={{ movies, fetchMovies, tvSeries, fetchTvSeries }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
