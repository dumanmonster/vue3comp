import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api'
})

apiClient.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*'
  return config
})
export default apiClient;