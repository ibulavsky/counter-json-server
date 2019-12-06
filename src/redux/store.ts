import {applyMiddleware, combineReducers, createStore} from "redux";
import counterReducer from "./couter-reducer";
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
    counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type GetStateType = () => AppState

export default store;
