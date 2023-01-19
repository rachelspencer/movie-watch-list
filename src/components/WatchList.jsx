import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie }) => {

    const movieDisplay = list.map((movie) => {
        console.log('watchlist map', movie)
        return <MovieCard movie={movie} removeMovie={removeMovie} list={list}/>;
      
    })
    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    );
};

export default Watchlist;