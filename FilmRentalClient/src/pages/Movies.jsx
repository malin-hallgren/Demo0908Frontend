import MovieList from '../components/MovieList';
import MovieCreate from '../components/MovieCreate';
import { MovieProvider } from "../context/MovieContext"

export default function Movies() {

    return (
        <MovieProvider>
            <MovieList />
            <MovieCreate />
        </MovieProvider>
    )
}