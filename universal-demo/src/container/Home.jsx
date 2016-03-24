import React, {Component} from 'react';
import {asyncConnect} from 'redux-async-connect';
import {connect} from 'react-redux';
import Counter from '../component/Counter.jsx';
import {increment, getCount} from '../redux/reducer/counter';

@asyncConnect([{
    // count: testAsync
    //count: (params, helpers) => Promise.resolve(10)
    promise: ({store: {dispatch}}) => {
        return dispatch(getCount());
    }
}])
@connect(
    state => ({count: state.counter.count}),
    {increment}
)
class Home extends Component {

    // componentWillMount() {
    //     const {getCount} = this.props;

    //     getCount();
    // }

    render() {
        const {count, increment} = this.props;

        return (
            <div className='home'>
                <Counter count={count} increment={increment}/>
            </div>
        );
    }
}

export default Home;
