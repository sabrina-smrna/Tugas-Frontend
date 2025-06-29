import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import ENDPOINTS from "../utils/constants/endpoint";
import MoviesContex from "../components/context/MoviesContext";


function Popular() {

  // const [movies, setMovies] = useState([]);
  const {setMovies} = useContext(MoviesContex);

  useEffect(function() {
    async function fetchPopularMovie(){
      // const API_KEY = import.meta.env.VITE_API_KEY;
      // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
      // const response = await axios(URL);
      const response = await axios(ENDPOINTS.POPULAR); //untuk membuat link lebih singkat
      setMovies(response.data.results);
      //console.log(response.dataresults)
    }
    fetchPopularMovie();
  }, []);

    return (
      <>
        {/* <Navbar /> */}
        < Hero />
        <Movies title="Popular Movies" />
        {/* <Footer /> */}
      </>
    );
  }
  
  export default Popular;