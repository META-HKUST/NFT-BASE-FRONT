import http from '@/utils/request'

const env = import.meta.env
const url = env.VITE_BASE_URL

export function login() {
    return http({
        url: url+'/login',
        method: 'post',
        data: {}
    })
}
