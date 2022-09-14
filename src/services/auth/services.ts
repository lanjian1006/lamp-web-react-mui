import urls from './serviceUrls'
import axios from '../axios.config'
import {Base64} from "js-base64";
import { AxiosPromise } from 'axios';

export interface LoginModel {
    code?: string
    grantType?: 'CAPTCHA' | 'REFRESH_TOKEN' | 'PASSWORD' | 'MOBILE'
    key?: string
    password?: string
    refreshToken?: string
    username?: string
}

const getCaptcha = async (key: string) => {
    console.log(urls.loginCaptcha)
    return await axios.get(urls.loginCaptcha, {
        params: {
            key: key,
            _t: new Date().getTime()
        },
        responseType: 'arraybuffer'
    }).then((res: any) => {
        return 'data:image/png;base64,' + btoa(new Uint8Array(res)
            .reduce((data, byte) => data + String.fromCharCode(byte), ''))
    })
}

const validateCode = (code: string, key: string) => {
    return axios.get(urls.validateCaptcha, {
        params: {
            code: code,
            key: key
        }
    })
}

const login = (model: LoginModel, key: string): AxiosPromise<ResponseType>  => {
    const authentication =
        `${Base64.encode(`${process.env.REACT_ENV_VITE_GLOB_CLIENT_ID}:${process.env.REACT_APP_VITE_GLOB_CLIENT_SECRET}`)}`
    model.grantType = 'CAPTCHA'
    model.key = key
    const headers = {
        'Authorization': authentication
    }

    return axios({
        method: 'post',
        url: urls.login,
        data: model,
        headers: headers
    })
    
}

export {
    getCaptcha,
    validateCode,
    login
}
