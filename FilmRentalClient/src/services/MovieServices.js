import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});


export const getAllMovies = async () => {
    const response = await api.get("movies");
    return response.data;
}

export const createMovie = async (movie) => {
    const response = await api.post("movies", movie);
    return response.data;
}

export const updateMovie = async (id, movie) => {
    const response = await api.put(`movies/${id}`, movie);
    return response.data;
}

export const deleteMovie = async (id) => {
    const response = await api.delete(`movies/${id}`);
}