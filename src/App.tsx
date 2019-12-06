import React from 'react';
import './App.css';
import Counter from "./ui/CounterContainer";
import {Provider} from "react-redux";
import store from './redux/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
        <div className="App">
            <Counter/>
        </div>
        </Provider>
    );
};

export default App;
