import {Api, createUserType} from "../../api/api";
import {Dispatch} from "redux";


const initialState = {
    isRegistered: false,
    users: [{}],
    error: '',
    status: "idle",
};

type InitialStateType = typeof initialState;

export const registrationReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case 'registrationReducer/SET-IS-REGISTERED':
            return {...state, isRegistered: action.isRegistered};
        case 'registrationReducer/SET-USER':
            return {...state, users: [...state.users, action.user]};
        case 'registrationReducer/SET-ERROR':
            return {...state, error: action.error};
        case 'registrationReducer/SET-STATUS':
            return {...state, status: action.status};
        default:
            return state;
    }
};


//thunks
export const createUserTC = (data: createUserType) => (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'));
    Api.createUser(data)
        .then(res => {
            dispatch(setUserAC(res.data.addedUser));
            dispatch(setIsRegisteredAC(true));
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch((error) => {
                if (!error.response) {
                    return "some error";
                }

                dispatch(setRegisteredErrorAC(error.response.data.error));
            }
        )
        .finally(() => {
            dispatch(setAppStatusAC('succeeded'));
        })
};

//actions
export const setUserAC = (user: AddedUserType) => ({type: 'registrationReducer/SET-USER', user} as const);
export const setIsRegisteredAC = (isRegistered: boolean) => ({type: 'registrationReducer/SET-IS-REGISTERED', isRegistered} as const);
export const setRegisteredErrorAC = (error: string) => ({type: 'registrationReducer/SET-ERROR', error} as const);
export const setAppStatusAC = (status: RequestStatusType) => ({type: "registrationReducer/SET-STATUS", status} as const);

//types
export type ThunkDispatch = Dispatch<ActionTypes>
export type AddedUserType = {}
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export type setUserActionType = ReturnType<typeof setUserAC>;
export type setIsRegisteredActionType = ReturnType<typeof setIsRegisteredAC>;
export type setRegisteredErrorActionType = ReturnType<typeof setRegisteredErrorAC>;
export type setAppStatusActionType = ReturnType<typeof setAppStatusAC>

export type ActionTypes =
    setIsRegisteredActionType
    | setUserActionType
    | setRegisteredErrorActionType
    | setAppStatusActionType