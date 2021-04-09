import { fetchData } from '../utils/fetchData.js';
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then(response => {
    console.log(response.info.count)
    return fetchData(`${API}${response.results[0].id}`)
  })

  .then(response => {
    console.log(response.name)
    return fetchData(response.origin.url)
  })

  .then(response => {
    console.log(response.dimension)
  })

  .catch(err => console.error(err))