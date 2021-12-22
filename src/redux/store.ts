import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { forgotReducer } from "../pages/RestorePassword/f-2-bll/forgotReducer";
import { cardsReducer } from "./reducers/cardsReducer";
import { loginReducer } from "./reducers/loginReducer";
import {packsReducer} from "./reducers/packs-reducer/packsReduser";


export type RootStateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  login: loginReducer,
  restore: forgotReducer,
  packs: packsReducer,
  cards: cardsReducer,
  // dialogsPage: dialogsReducer,
  // sidebarPage: sidebarReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;