import { BASE_URL } from './api_url.js'

export const fetchCharactersAsync = async () => {
    const res = await fetch(`${BASE_URL}/character`);
    if (!res.ok) throw new Error('Error en la API de personajes');
    const data = await res.json();
    return data.results.slice(0, 5);
};

export const fetchCharactersPromises = () => {
    return fetch(`${BASE_URL}/character`)
        .then(res => {
            if (!res.ok) throw new Error('Error en la API de personajes');
            return res.json();
        })
        .then(data => data.results.slice(0, 5));
};