import {useState, useEffect, createContext} from 'react';
import {getAllMovies} from '../services/MovieServices'

export const MovieContext = createContext();

export function MovieProvider({ children }){
    const [movies, setMovies] = useState([]);

    async function getMovieList() {
        try {
            const movieList = await getAllMovies();

            setMovies(movieList)
            console.log(movieList);

        } catch (error) {
            console.log("Error fetching movies:", error)
        }
    }

    useEffect(() => {
        getMovieList();
    }, [])

    return (
        <MovieContext.Provider value={{movies, getMovieList}} >
            {children}
        </MovieContext.Provider>
    )
}





    
    