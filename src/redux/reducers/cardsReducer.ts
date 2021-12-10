import { ActionTypes } from "../actions"

type InitialStateType = typeof initialState




const initialState = {
  //  status: 'loading' as RequestStatusType,
  //  error: null as ErrorType
}


export const cardsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
      //  case 'APP/SET-STATUS':
      //      return {...state, status: action.status}
      //  case 'APP/SET-ERROR':
      //      return {...state, error: action.error}
      default:
          return state
  }
}





//thunk


