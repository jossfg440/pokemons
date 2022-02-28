import axios from 'axios'
const baseUrl = 'https://pokemon-pichincha.herokuapp.com/pokemons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePokemon = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const countId = () => {
  const request = axios.get(`${baseUrl}/count?idAuthor=1`)
  return request.then(response => response.data)
}

export default { getAll, create, update,deletePokemon,countId }


