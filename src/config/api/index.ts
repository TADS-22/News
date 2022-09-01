import axios from "axios";

const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        apiKey: '2fc665f460e044ff992ac2c654013508'
    }
})

export default newsApi