const API_URL = 'https://fakestoreapi.com'

/*
fetch(`${API_URL}/products`)
    .then(res => res.json()
    .then(data => return data)
*/
const getProductsPromise = () => {
    return fetch(`${API_URL}/products`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => {
            console.error('Error en getProductsPromise:', err);
            throw err;
        });
}

const getProductsAsync = async () => {
    try {
        const res = await fetch(`${API_URL}/products`)
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = res.json()
            return data
    } catch (err) {
        console.error('Error en getProductsAsync:', err)
        throw err;
    }
}

const main = async () => {
    const products = await getProductsAsync()
    //getProductsPromise()
    console.log(products)
}

main()