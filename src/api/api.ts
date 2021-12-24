import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
});

export const Api = {
    login (email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponsType>('auth/login', {email, password, rememberMe})
    },
    createUser (data: createUserType) {
        return instance.post<createUserType, AxiosResponse<ResponseCreateUserType>>("auth/register", data, {});
    },
    // logOut() {
    //     return instance.delete('auth/me')
    // },
    // SetNewPassword(password: string, resetPasswordToken: string) {
    //     return instance.post<NewPasswordType>('auth/set-new-password', {password, resetPasswordToken})
    // },
    // ForgotPassword(email: string, from: string, message: string) {
    //     return instance.post<NewPasswordType>('auth/forgot', {email, from, message})
    // }
    me () {
        return instance.post<any>('auth/me', {})
    }
};


export const packListApi = {
    getPacks(sortPacks: string,packName:string)  {
        return instance.get<ResponsTypePacks>(`cards/pack`, {
            params: {
                pageCount: 10,
                sortPacks,
                packName,
            }
        })
    },
}


//types
export type createUserType = {
    email: string
    password: string
}

export type ResponseCreateUserType = {
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


export type ResponsTypePack = {
    cardsCount: number
    created: Date
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: Date
    user_id: string
    user_name: string
    __v: number
    _id: string
}

export type ResponsTypePacks = {
    cardPacks: ResponsTypePack[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
}


export type LoginRegistrationType = {
    error?: string
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
