import { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import { createMovie } from '../services/MovieServices';

export default function MovieCreate() {

    const [title, setTitle] = useState('');
    //formulär kommer skicka in värdet som string ändå.
    const [releaseYear, setReleaseYear] = useState('');
    const {getMovieList} = useContext(MovieContext);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // parseInt omvandlar värdet till ett integer.
            const newMovie = { title, releaseYear: parseInt(releaseYear) }
            await createMovie(newMovie);
            await getMovieList();
            
            setTitle('');
            setReleaseYear('');
        } catch (error) {
            console.log('Error creating movie:', error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Movie Title:</label>
                <input
                    id='title'
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />

                <label htmlFor='releaseYear'>Release Year:</label>
                <input
                    id='releaseYear'
                    type="number"
                    value={releaseYear}
                    onChange={e => setReleaseYear(e.target.value)}
                    required
                />
                <button type='submit'>Create Movie</button>
            </form>
        </div>
    )
}