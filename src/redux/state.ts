import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { cardsReducer } from "./reducers/cardsReducer";
import {forgotReducer} from "../pages/RestorePassword/f-2-bll/forgotReducer";



export type StateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  cardsPage: cardsReducer,
  restore: forgotReducer,
  // dialogsPage: dialogsReducer,
  // sidebarPage: sidebarReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;