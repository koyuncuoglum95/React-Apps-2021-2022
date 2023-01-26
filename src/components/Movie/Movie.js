import './Movie.css';

const Movie =  (props) =>  {
   
        return (
                <div>
                    <h1 id="movieTitle">{props.movieList.Title}</h1>
                    <img src={props.movieList.Poster} alt='API Poster' id="movieImage"/>
                    <p id="moviePlot">{props.movieList.Plot}</p>
                    <p id="movieGenre">{props.movieList.Genre}</p>
                    <p id="movieWriter">{props.movieList.Writer}</p>
                    <p id="movieOriginal">Original Release :</p>
                    <p id="movieReleased">{props.movieList.Released}</p>
                    <p id="movieRun">Running Time :</p>
                    <p id="movieTime">{props.movieList.Runtime}</p>
                    <p id="movieBox">Box Office :</p>
                    <p id="movieOffice">{props.movieList.BoxOffice}</p>
                    <p id="movieVote">Rating :</p>
                    <p id="movieAverage">{props.movieList.imdbRating}</p>
                </div>
            )
           
    
        
    }
    

export default Movie;