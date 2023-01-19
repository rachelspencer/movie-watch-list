import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/WatchList';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
    const [ movieList, setMovieList ] = useState([]);
    const [ list, setList ] = useState([]);
    const [ page, setPage ] = useState(1);

    const getData = async () => {
        try {
            const response =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)         
            setMovieList(response.data.results)
        } catch(err) {
            console.log('err', err);
        };
    };

    useEffect(() => {
        getData();
    }, [page]);

    const addMovie = (movie) => {
        setList([...list, movie]);
    };

    const removeMovie = (movie) => {
        let newState = list.filter((movieToRemove) => {
            return movieToRemove !== movie 
        });

        setList(newState);
    };

    return (
        <div>
            <Header />
            <main>
                <MovieScreen  removeMovie={removeMovie} addMovie={addMovie} page={page} setPage={setPage} movieList={movieList} list={list}/>
                <Watchlist removeMovie={removeMovie} list={list}/>
            </main>
            
        </div>
        
    );
};

export default App;