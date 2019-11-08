import axios from 'axios'

const req = axios.create()

const baseUrl = 'http://192.168.1.22:9410'

const getBaseOptions = () => {
    const config = {
        timeout: 1000 * 30,
        baseURL: baseUrl,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }
    return config
}

const http = (options) => {
    options = Object.assign(getBaseOptions(), options)
    return req(options)
}

export default http
