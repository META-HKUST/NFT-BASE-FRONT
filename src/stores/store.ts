import {defineStore} from 'pinia'
import http from '@/utils/request'

const localToken = window.localStorage.getItem('token') || ''

if (localToken) {
    http.defaults.headers.common['Authorization'] = 'Bearer ' + localToken;
}

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        token: localToken
    }),
    // getters: {
    //   token: (state) => state.token
    // },
    actions: {
        setToken(token: string) {
            this.token = token
            // this.$patch((state) => {
            //     state.token = token
            // })
            // this.$patch({
            //     token:30
            // });

            if (token) {
                window.localStorage.setItem('token', token)
                http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            } else {
                window.localStorage.removeItem('token')
                delete http.defaults.headers.common['Authorization']
            }
        }
    }
})

// const store = useStore()
// store.setToken(localToken)
