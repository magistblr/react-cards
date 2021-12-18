import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { registrationReducer } from "./reducers/registrationReducer";
import { loginReducer } from "./reducers/loginReducer";



export type RootStateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  login: loginReducer,
  // sidebarPage: sidebarReducer,
  registrationPage: registrationReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;