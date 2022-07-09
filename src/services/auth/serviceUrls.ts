type URL = {
    [key: string]: string
}

const urls: URL  = {
    loginCaptcha: '/anyTenant/captcha',
    validateCaptcha: '/anyTenant/check',
    login: '/anyTenant/login'
}

export default urls