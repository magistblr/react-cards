import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
});

export const Api = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponsType>('auth/login', {email, password, rememberMe})
    },
    addUser(data: addUserType) {
        return instance.post<addUserType, AxiosResponse<ResponseAddUserType>>("auth/register", data, {});
    }
    // logOut() {
    //     return instance.delete('auth/me')
    // },
    // SetNewPassword(password: string, resetPasswordToken: string) {
    //     return instance.post<NewPasswordType>('auth/set-new-password', {password, resetPasswordToken})
    // },
    // ForgotPassword(email: string, from: string, message: string) {
    //     return instance.post<NewPasswordType>('auth/forgot', {email, from, message})
    // }
};


//types
export type addUserType = {
    email: string
    password: string
}

export type ResponseAddUserType = addUserType & {
    addedUser: {}
    error?: string
}

export type ResponsType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

// export type NewPasswordType = {
//     info: string
//     error: string
// }

// export type ForgotPasswordType = {
//     email: string
//     from: string
//     message: string
// }
