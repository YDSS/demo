import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {increment} from '../redux/reducer/counter';

class Counter extends Component {
    static propTypes = {
        increment: PropTypes.func,
        counter: PropTypes.object
    }

    render() {
        const {count, increment} = this.props;
        
        return (
            <span className='counter' onClick={increment}>{count}</span>
        );
    }

}

export default connect(
    state => ({count: state.counter.count}),
    {increment}
)(Counter);
