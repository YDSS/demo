import React, {Component} from 'react';
import {connect} from 'react-redux';
import Counter from '../component/Counter.jsx';
import {increment} from '../redux/reducer/counter';

class Home extends Component {

    render() {
        const {count, increment} = this.props;

        return (
            <div className='home'>
                <Counter count={count} increment={increment}/>
            </div>
        );
    }
}

export default connect(
    state => ({count: state.counter.count}),
    {increment}
)(Home);
