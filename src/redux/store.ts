import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { forgotReducer } from "../pages/RestorePassword/f-2-bll/forgotReducer";
import { loginReducer } from "./reducers/loginReducer";
// import { cardsReducer } from "./reducers/cardsReducer";
import { packsReducer } from "./reducers/packsReducer";



export type RootStateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  login: loginReducer,
  restore: forgotReducer,
  // dialogsPage: dialogsReducer,
  // sidebarPage: sidebarReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;