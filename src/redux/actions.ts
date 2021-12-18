import { cardsReducer } from './reducers/cardsReducer';
import { AddedUserType } from './reducers/registrationReducer';


export const action1 = (value: any) => ({ type: 'cardsReducer/NEW_ARRAY_CARDS'} as const);

export const setUserAC = (user: AddedUserType) => ({type: 'cardsReducer/SET-USER', user} as const);
export const setIsRegisteredAC = (isRegistered: boolean) => ({type: 'cardsReducer/SET-IS-REGISTERED', isRegistered} as const);


//types
export type setUserActionType = ReturnType<typeof setUserAC>;
export type setIsRegisteredType = ReturnType<typeof setIsRegisteredAC>;

export type ActionTypes =
        | ReturnType<typeof action1>
        | setIsRegisteredType
        | setUserActionType
