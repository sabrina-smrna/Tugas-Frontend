import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: { accept: "application/json" },
        });

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Failed to fetch top-rated movies", error);
      }
    }

    fetchTopRatedMovies();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <h2 className="text-2xl font-bold text-center my-4">Top Rated Movies</h2>
      <Movies movies={movies} />
      {/* <Footer /> */}
    </>
  );
}

export default TopRated;
