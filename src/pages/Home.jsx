import { useState } from "react";
// import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";
import Counter from "../components/Counter";
import AddMovie from "../components/AddMovie/AddMovie";
import data from "../utils/constants/data";
import Button from "../components/UI/button/Index";
// import Button from "../components/UI/Button/Index";



function Home() {

    // const [movies, setMovies] = useState(data);
    // const [movies] = useState(data);
    return(
        <div>
            {/* <Navbar /> */}
            <main>
                <Hero />
                {/* <Button variant="primary" full>Lihat</Button>
                <Button variant="secondary">Lihat</Button> */}
                {/* <Button size="sm" variant="primary">LIhat</Button> */}
                {/* <Button>LIhat</Button>
                <Button size="lg" variant="secondary" full>LIhat</Button> */}

                {/* <Movies movies={movies} setMovies={setMovies} /> */}
                <Movies />
                {/* <AddMovie movies={movies} setMovies={setMovies} /> */}
                {/* <Counter /> */}
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default Home;