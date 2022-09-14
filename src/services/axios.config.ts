import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

// const BASE_URL = process.env.REACT_APP_REQUEST_HOST?.concat(process.env.REACT_APP_REQUEST_PUBLIC_URL ?? '')
const BASE_URL = process.env.REACT_APP_REQUEST_PUBLIC_URL



const axiosProxy = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
})

axiosProxy.interceptors.response.use((response): ResponseType | undefined => {
    return response.data
}, error => {
    return Promise.reject(error.response.data)
})

// axiosProxy.interceptors.request.use((requestConfig) => {
//     // Token           用户的token信息
//     // TenantId        租户ID
//     // ApplicationId   当前应用ID
//     // Authorization   客户端id， base64加密
//     // Path            当前页面的路由地址前缀    菜单栏 # 号后面的 路径
//     // gray_version    写死zuihou
//     console.log(requestConfig);
//     return requestConfig

// })

export default axiosProxy

export interface ResponseType {
    code?: number
    data?: any
    errorMsg?: string
    extra?: any
    isSuccess?: boolean
    msg?: string
    path?: string
    timestamp?: number
}
