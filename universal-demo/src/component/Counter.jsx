import React, {PropTypes} from 'react';

const Counter = (props) => 
    <span className='counter' onClick={props.increment}>count: {props.count}</span>

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
}

export default Counter;

