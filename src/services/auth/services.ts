import urls from './serviceUrls'
import axios from '../axios.config'

const KEY = process.env.REACT_APP_REQUEST_KEY

export interface LoginModel {
    ApplicationId: string
    Authorization: string
    TenantId: string
    Token: string
    login: {
        code?: string
        grantType?: 'CAPTCHA' | 'REFRESH_TOKEN' | 'PASSWORD' | 'MOBILE'
        key?: string
        password?: string
        refreshToken?: string
        username?: string
    }
}

const getCaptcha = () => {
    return axios.get(urls.loginCaptcha, {
        params: {
            key: KEY,
            _t: new Date().getTime()
        },
        responseType: 'arraybuffer'
    })
}

const validateCode = (code: string) => {
    return axios.get(urls.validateCaptcha, {
        params: {
            code: code,
            key: KEY
        }
    })
}

const login = (model: LoginModel) => {
    return axios.post(urls.login, model)
}

export {
    getCaptcha,
    validateCode,
    login
}
