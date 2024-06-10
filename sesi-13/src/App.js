/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isNotif, setIsNotif] = useState(false);
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  // nilai default nya tetap di useState(false)
  // const notif = () => {
  //   setIsNotif(!isNotif);
  //   setTimeout(() => {
  //     setIsNotif(!isNotif);
  //   }, 3000);
  // };

  // nilai defaultnya ambil nilai terakhirnya (parent)
  const notif = () => {
    setIsNotif(!isNotif);
    setTimeout(() => {
      setIsNotif((x) => !x);
    }, 1900);
  };

  console.info({ isNotif });

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (e) => {
    if (e.length > 3) {
      const query = await searchMovie(e);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
      {isNotif && <h3>Thank You 💓</h3>}
      <button onClick={notif} className="btn">
        {isNotif ? "notifikasi OFF" : "notifikasi ON"}
      </button>
      <header className="App-header">
        <h1>MovieTecH</h1>
        <input
          placeholder="search 🔍"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
