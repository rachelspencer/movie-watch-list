import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
    const [ movieList, setMovieList ] = useState([]);
    const [ watchList, setWatchList ] = useState([]);
    const [ page, setPage ] = useState(1);

    const getData = async () => {
        try {
            const response =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)        
            console.log(response.data.results)
            setMovieList(response.data.results)
        } catch(err) {
            console.log('err', err);
        };
    };

    useEffect(() => {
        getData();
    }, [page]);

    return (
        <div>
            <Header />
            <main>
                <MovieScreen page={page} setPage={setPage} movieList={movieList} />
            </main>
            
        </div>
        
    );
};

export default App;