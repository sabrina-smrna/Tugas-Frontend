import { useEffect, useContext } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function TopRated() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      try {
        const response = await axios(ENDPOINTS.TOPRATED);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch top-rated movies", error);
      }
    }

    fetchTopRatedMovies();
  }, [setMovies]);

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movies" />
    </>
  );
}

export default TopRated;
