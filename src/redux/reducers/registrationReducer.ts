import {ActionTypes, setIsRegisteredAC, setUserAC} from "../actions";
import {addUserType, authAPI} from "../../api/api";
import {Dispatch} from "redux";



const initialState = {
    isRegistered: false,
    users: [{}]
};

type InitialStateType = typeof initialState;

export const registrationReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case 'cardsReducer/SET-IS-REGISTERED':
            return {...state, isRegistered: action.isRegistered};
        case 'cardsReducer/SET-USER':
            return {...state, users: [...state.users, action.user]};
        default:
            return state;
    }
};


//thunks
export const addUserTC = (data: addUserType) => (dispatch: ThunkDispatch) => {
    authAPI.addUser(data)
        .then(res => {
            dispatch(setUserAC(res.data.addedUser));
            dispatch(setIsRegisteredAC(true));
        })
        .catch(

        )
};


//types
type ThunkDispatch = Dispatch<ActionTypes>
export type AddedUserType = {}
