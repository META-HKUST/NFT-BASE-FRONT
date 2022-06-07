import http from '@/utils/request'

const env = import.meta.env

// const url = env.VITE_BASE_URL + '/users'

export function login(params: any) {
    const {email, passwd} = params
    return http.post('/users/login', null, {
        params: {
            email, passwd
        }
    })
}

export function register(params: any) {
    const {email, passwd, name} = params
    return http.post('/users/register', null, {
        params: {
            email, passwd, name
        }
    })
}

export function sendRegisterEmail(params: any) {
    const {email, name} = params
    return http.post('/users/rerunEmail', null, {
        params: {
            email, name
        }
    })
}

export function resetPasswd(email: string) {
    return http.post('/users/reset-passwd', null, {
        params: {
            email
        }
    })
}
