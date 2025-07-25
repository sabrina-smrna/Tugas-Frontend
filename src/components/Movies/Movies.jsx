import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constants/data"
import { useContext, useState } from "react";
import MoviesContex from "../context/MoviesContext";

function Movies() {
// const {movies, setMovies} = props;

  // const {title = "Latest Movies = props"};
  const {movies} = useContext(MoviesContex)
  function handleClick(){
    const movie = {
    id: "xyz", title: "Jigsaw",
    year: 2022, type: "Movie",
    poster: "https://picsum.photos/200/300?grayscale",
  };
  // setMovies([...movies,movie]);
}

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>

  );
}

export default Movies;
