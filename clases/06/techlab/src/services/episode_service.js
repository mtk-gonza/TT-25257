import { BASE_URL } from './api_url.js'

export const fetchEpisodesAsync = async () => {
    const res = await fetch(`${BASE_URL}/episode`);
    if (!res.ok) throw new Error('Error en la API de episodios');
    const data = await res.json();
    return data.results.slice(0, 5);
};

export const fetchEpisodesPromises = () => {
    return fetch(`${BASE_URL}/episode`)
        .then(res => {
            if (!res.ok) throw new Error('Error en la API de episodios');
            return res.json();
        })
        .then(data => data.results.slice(0, 5));
};