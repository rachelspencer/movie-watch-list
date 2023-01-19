import MovieCard from "./MovieCard";

const MovieScreen = ({ list, page, setPage, movieList, addMovie, removeMovie }) => {

    const movieDisplay = movieList.map((movie) => {
        return <MovieCard movie={movie} addMovie={addMovie} removeMovie={removeMovie} list={list}/>;
    });

    const handleDecrementClick = (event) => {
        setPage(page - 1);
    };

    const handleIncrementClick = (event) => {
        setPage(page + 1);
    };

    return (
        <div className="page" >
            <h1>Rachel's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={handleDecrementClick}>Previous</button>
                <button onClick={handleIncrementClick}>Next</button>
            </div>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    );
};

export default MovieScreen;