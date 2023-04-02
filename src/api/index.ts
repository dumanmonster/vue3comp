import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://birdsbuiildapi.herokuapp.com/'
})


export default apiClient;