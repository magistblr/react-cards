import {Dispatch} from "redux";
import {RecoveryAPI} from "../f-3-dall/ForgotAPI";


const initialState: InitialStateType = {
    success: false,
    error: null,
    info: null
}

export const forgotReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'recovery/SET-SUCCESS':
            return {...state, success: action.success, error: ''}
        case 'recovery/SET-ERROR':
            return {...state, error: action.error, success: false}
        case 'recovery/SET-PASS':
            return {...state, info: action.info, error: ''}

        default:
            return state
    }
}

export const sendPassRecoveryTC = (email: string) => (dispatch: Dispatch<ActionType>) => {
    RecoveryAPI.recoveryPass(email)
        .then((res) => {
            if (res.data.success) {
                dispatch(setSuccessAC(true))
                alert('Письмо отправлено')
            }
        })
        .catch(e => {
            dispatch(setErrorAC(e.response.data.error))
        })
}

export const setNewPassTC = (password: string, token: string) => (dispatch: Dispatch<ActionType>) => {
    RecoveryAPI.newPass(password, token)
        .then((res) => {
            dispatch(setNewPassAC(res.data.info))
            alert('Пароль изменен')

        })
        .catch(e => {
            dispatch(setErrorAC(e.response.data.error))
        })
}

export const setSuccessAC = (success: boolean) => ({type: 'recovery/SET-SUCCESS', success} as const)
export const setNewPassAC = (info: string) => ({type: 'recovery/SET-PASS', info} as const)
export const setErrorAC = (error: string) => ({type: 'recovery/SET-ERROR', error} as const)


type InitialStateType = {
    success: boolean
    error: null | string
    info: null | string

}

type ActionType =
    | ReturnType<typeof setSuccessAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setNewPassAC>

