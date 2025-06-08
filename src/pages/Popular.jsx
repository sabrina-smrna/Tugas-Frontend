import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"

function Popular() {

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    async function fetchPopularMovie(){
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      const response = await axios(URL);
      setMovies(response.data.results);
      //console.log(response.dataresults)
    }
    fetchPopularMovie();
  }, []);

    return (
      <>
        {/* <Navbar /> */}
        < Hero />
        <Movies movies={movies} />
        {/* <Footer /> */}
      </>
    );
  }
  
  export default Popular;