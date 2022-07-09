import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

// const BASE_URL = process.env.REACT_APP_REQUEST_HOST?.concat(process.env.REACT_APP_REQUEST_PUBLIC_URL ?? '')
const BASE_URL = process.env.REACT_APP_REQUEST_PUBLIC_URL

export default axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})
