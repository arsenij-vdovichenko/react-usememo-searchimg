const BASE_URL = "https://pixabay.com/api/"
const API_KEY = "55492613-17c5829e44cc15f695cf7b6b1"

export const fetchImages = (query, page=1)=>{


       return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}`).then(res=>res.json())
}
