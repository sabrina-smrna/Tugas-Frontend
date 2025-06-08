// import styles from './Movie.module.css';
import styled from "styled-components";

const StyledMovie = styled.div`
    min-height: 450px;
    padding: 0;
    margin: 0;

img{
    border-radius: 25px;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
h3 {
    color: #4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
}    
p {
    color: #4361ee;
}


/* Medium Screen */
  @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  
  /* Large Screen */
  @media (min-width: 992px) {
      flex: 1 1 30%;
      max-width: 1200px;
      margin: 3rem auto;
      flex-basis: 25%;
      padding: 1rem;
    }

`

function Movie(props){
    const {movie} = props;
    const tmdbImage =`https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const year = movie.year || movie.release_date;

    return(
         <StyledMovie>
            <img src={movie.poster || tmdbImage} />
            <h3>{movie.title}</h3>
            <p>{year}</p>
        </StyledMovie>


        // <div className={styles.movie}>
        //     <img className={styles.movie__image} 
        //     src={movie.poster} 
        //     alt={movie.title} />
        //     <h3 className={styles.movie__title}>{movie.title}</h3>
        //     <p className={styles.movie__date}>{movie.year}</p>
        // </div>
       

    )
}

export default Movie;