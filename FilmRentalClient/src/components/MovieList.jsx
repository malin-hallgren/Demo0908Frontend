import { deleteMovie } from "../services/MovieServices";

import { MovieContext } from "../context/MovieContext";
import {useState, useContext} from 'react';

export default function MovieList() {
    const {getMovieList, movies} = useContext(MovieContext);

    async function handleDelete(movieId){
        await deleteMovie(movieId);
        await getMovieList();
    }

    return (
        <>
            <h1>List of Movies!</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.movieId}>
                        <p><b>Movie title:</b> {movie.title}</p>
                        <span><b>Released:</b> {movie.releaseYear}</span>
                        <button onClick={() => handleDelete(movie.movieId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}