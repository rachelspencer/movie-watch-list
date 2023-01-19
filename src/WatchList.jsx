import MovieCard from "./components/MovieCard";

const Watchlist = ({ list }) => {

    const movieDisplay = list.map((movie) => {
        console.log('watchlist map', movie)
        return <MovieCard movie={movie}/>;
      
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