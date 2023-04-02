import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://birdsbuildapi.herokuapp.com/api'
})

apiClient.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
})
export default apiClient;