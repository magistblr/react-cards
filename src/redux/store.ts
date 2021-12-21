import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { forgotReducer } from "../pages/RestorePassword/f-2-bll/forgotReducer";
import { registrationReducer } from "./reducers/registrationReducer";
import { loginReducer } from "./reducers/loginReducer";
import {packsReducer} from "./reducers/packs-reducer/packsReduser";


export type RootStateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  login: loginReducer,
  restore: forgotReducer,
  packs:packsReducer,
  // dialogsPage: dialogsReducer,
  // sidebarPage: sidebarReducer,
  registrationPage: registrationReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;