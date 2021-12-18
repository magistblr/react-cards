import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
// import { cardsReducer } from "./reducers/cardsReducer";
import { packsReducer } from "./reducers/packsReducer";



export type StateType = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
  // cardsPage: cardsReducer,
  packsList: packsReducer,
  // sidebarPage: sidebarReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;