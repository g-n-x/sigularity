import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:6475'
})

export default api
