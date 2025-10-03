import { BASE_URL } from './api_url.js'

export const fetchLocationsAsync = async () => {
    const res = await fetch(`${BASE_URL}/location`);
    if (!res.ok) throw new Error('Error en la API de ubicaciones');
    const data = await res.json();
    return data.results.slice(0, 5);
};

export const fetchLocationsPromises = () => {
    return fetch(`${BASE_URL}/location`)
        .then(res => {
            if (!res.ok) throw new Error('Error en la API de ubicaciones');
            return res.json();
        })
        .then(data => data.results.slice(0, 5));
};