import MovieCard from "./MovieCard";

const MovieScreen = ({list, page, setPage, movieList}) => {

    const movieDisplay = movieList.map((movie) => {
        return <MovieCard movie={movie} />
    });

    return (
        <div className="page">
            <h1>Rachel's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    );
};

export default MovieScreen;