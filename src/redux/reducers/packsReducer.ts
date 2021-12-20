import { ActionTypes } from "../actions"

export type InitialStatePacksType = typeof initialStatePacks


const initialStatePacks = [
  {
    name: "Pack name",
    cards: 50,
    lastUpdated: "18.03.2021",
    createdBy: "Jacky Chan",
    actions: {
      delete: true,
      edit: true,
      learn: true,
    },
  },
  {
    name: "Pack name new",
    cards: 50,
    lastUpdated: "18.03.2021",
    createdBy: "Jacky Chan",
    actions: {
      delete: true,
      edit: true,
      learn: true,
    },
  },
  {
    name: "Football",
    cards: 5,
    lastUpdated: "18.03.2021",
    createdBy: "Jacky Chan",
    actions: {
      learn: true,
    },
  },
]


export const packsReducer = (state: InitialStatePacksType = initialStatePacks, action: ActionTypes): InitialStatePacksType => {
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


