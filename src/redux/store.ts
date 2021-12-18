import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { cardsReducer } from "./reducers/cardsReducer";
import {registrationReducer} from "./reducers/registrationReducer";




export type StateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  cardsPage: cardsReducer,
  // dialogsPage: dialogsReducer,
  // sidebarPage: sidebarReducer,
  registrationPage: registrationReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;