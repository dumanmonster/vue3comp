import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://birdsbuiildapi.herokuapp.com/api'
})


export default apiClient;