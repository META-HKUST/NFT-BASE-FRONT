import http from '@/utils/request'

export function login() {
    return http({
        url: 'apiurl',
        method: 'post',
        data: {}
    })
}
