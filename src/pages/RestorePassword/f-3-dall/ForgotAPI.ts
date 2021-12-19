import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const RecoveryAPI = {
    recoveryPass(email: string) {
        return instance.post<recoveryType>('/auth/restore_password', {
            email: "nya@nya.nya",
            from: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px">password recovery link: 
                            <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
        })
    },
    newPass(password: string, token: string) {
        return instance.post<recoveryType>('/auth/set-new-password', {
            password: password,
            resetPasswordToken: token,
        })
    }
}
export type recoveryType = {
    error: string
    success: boolean
    info: string
}