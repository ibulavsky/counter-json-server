import {GetStateType} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {api} from "../api/api";

const INCREMENT = "Counter-ts/counter-reducer/INCREMENT";
const RESET = "Counter-ts/counter-reducer/RESRET";
const GET_COUNTER_SUCCESS = "Counter-ts/counter-reducer/GET_COUNTER_SUCCESS";

const initState = {
    value: 0
};

interface IInitState {
    value: number
}

interface IIncrementAction {
    type: typeof INCREMENT
    delta: number
}


interface IResetAction {
    type: typeof RESET
}

interface IGetCounterSuccessAction {
    type: typeof GET_COUNTER_SUCCESS
    value: number
}


type CounterActionTypes = IIncrementAction | IResetAction | IGetCounterSuccessAction;



const counterReducer = (state = initState, action: CounterActionTypes): IInitState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.delta
            };
        case RESET:
            return {
                ...state,
                value: 0
            };
        case GET_COUNTER_SUCCESS:
            return {
                ...state,
                value: action.value
            };
        default:
            return state
    }
};

// actionCreator
export const incrementSuccess = (delta: number): IIncrementAction => ({
    type: INCREMENT,
    delta
});
export const resetSuccess = (): IResetAction => ({type: RESET});
export const getCounterSuccess = (value: number): IGetCounterSuccessAction => ({type: GET_COUNTER_SUCCESS, value: value});

// thunkCreator
export const increment = (delta: number) => async (dispatch: ThunkDispatch<{}, {}, CounterActionTypes>, getState: GetStateType) => {
    await api.increment(delta);
    dispatch(incrementSuccess(delta))
};
export const reset = () => async (dispatch: ThunkDispatch<{}, {}, CounterActionTypes>, getState: GetStateType) => {
    await api.reset();
    dispatch(resetSuccess())
};
export const getCounter = () => async (dispatch: ThunkDispatch<{}, {}, CounterActionTypes>, getState: GetStateType) => {
    let data = await api.getCounter();
    // console.log(data);
    dispatch(getCounterSuccess(data.value))
};

export default counterReducer;
