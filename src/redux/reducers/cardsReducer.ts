import {Dispatch} from "redux"
import {Api, ResponsType} from "../../api/api";

type ActionTypes =
    | ReturnType<typeof IsLoginAC>


export type initialStateType = typeof initialState

const initialState = {
}

export const cardsReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        // case "IS-LOGIN":
        //     return {...state, isLogin: action.isLogin}
        default:
            return state
    }
}
export const SetCardsAC = (openCloseEye: boolean) => {
    return {
        type: 'OPEN-CLOSE-EYE',
        openCloseEye
    } as const
}

export const CardsTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {

    // return Api.login(email, password, rememberMe)
    //     .then((res) => {
    //         dispatch(ProfileAC(res.data))
    //         dispatch(IsLoginAC(true))
    //     })
    //     .catch((err) => {
    //         dispatch(ErrorLogin(true))
    //         const error = err.response ? err.response.data.error : (err.message + ', more details in the console');
    //         dispatch(ErrorTextFromResponse(error))
    //     })
    //     .finally(() => {
    //         dispatch(PreloaderStatus('succeeded'))
    //     })
}
