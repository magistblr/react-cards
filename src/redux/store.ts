import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { forgotReducer } from "../pages/RestorePassword/f-2-bll/forgotReducer";
import { registrationReducer } from "./reducers/registrationReducer";
import { cardsReducer } from "./reducers/cardsReducer";
import { packsReducer } from "./reducers/packsReducer";
import { loginReducer } from "./reducers/loginReducer";
import { packsListReducer } from "./reducers/packsListReduсer.ts/packsListReduсer";


export type RootStateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  login: loginReducer,
  restore: forgotReducer,
  packsList: packsListReducer,
  cards: cardsReducer,
  packs: packsReducer,
  registrationPage: registrationReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;