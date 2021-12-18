import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0/",
    baseURL: "http://localhost:7542/2.0/",
});


export const authAPI = {
    addUser(data: addUserType) {
        return instance.post<addUserType, AxiosResponse<ResponseAddUserType>>("auth/register", data, {});
    }
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