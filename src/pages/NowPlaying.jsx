import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
      try {
        const response = await axios(URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Failed to fetch now playing movies", error);
      }
    }

    fetchNowPlayingMovies();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <h2 className="text-2xl font-bold text-center my-4">Now Playing</h2>
      <Movies movies={movies} />
      {/* <Footer /> */}
    </>
  );
}

export default NowPlaying;
