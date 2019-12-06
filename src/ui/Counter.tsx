import React from 'react';
import '../App.css';


export type IProps = IMapState & IDispatchState
export interface IMapState {
    value: number
}

export interface IDispatchState {
    increment: (value: number) => void
    reset: () => void
    getCounter: () => void
}

const Counter: React.FC<IMapState & IDispatchState> = (props) => {
    const incValue = () => props.increment(1);
    const reset = () => props.reset();

    return (
        <div className="App">
            <div>Counter: <span> {props.value}</span></div>
            <div className={"buttons"}>
                <button onClick={incValue}>Click</button>
                <button onClick={reset}>Default</button>
            </div>
        </div>
    );
};

export default Counter;
