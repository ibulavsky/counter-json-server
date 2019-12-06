import React from 'react';
import Counter, {IMapState, IProps} from './Counter';
import {connect} from "react-redux";
import {getCounter, increment, reset} from "../redux/couter-reducer";
import {AppState} from "../redux/store";

class CounterContainer extends React.Component <IProps> {
    componentDidMount() {
        this.props.getCounter()
    }

    render() {
        return <Counter {...this.props} />
    }
}


const mapStateToProps = (state: AppState): IMapState => ({
        value: state.counter.value
    }
);

export default connect(mapStateToProps, {increment, reset, getCounter})(CounterContainer)
