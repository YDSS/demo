import React from 'react'; import { connect } from 'react-redux';

const App = ({ count, dispatch }) => {
    const increment = function () {
        dispatch({
            type: 'counter/increment'
        });
    }

    const decrement = function () {
        dispatch({
            type: 'counter/decrement'
        });
    }

    return (
        <div className='app'>
            <h1>Counter</h1>
            <span onClick={increment}>{count}</span>
            <span onClick={decrement}> - </span>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(App);
