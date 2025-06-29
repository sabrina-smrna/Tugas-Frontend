import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function NowPlaying() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      try {
        const response = await axios(ENDPOINTS.NOWPLAYING);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch now playing movies", error);
      }
    }

    fetchNowPlayingMovies();
  }, [setMovies]);

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  );
}

export default NowPlaying;
