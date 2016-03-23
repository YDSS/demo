import React, {Component} from 'react';
import {asyncConnect} from 'redux-async-connect';
import {connect} from 'react-redux';
import Counter from '../component/Counter.jsx';
import {increment, getCount} from '../redux/reducer/counter';

//@connect(
//    state => ({count: state.counter.count}),
//    {increment, getCount}
//)
@asyncConnect([{
    // count: testAsync
    count: (params, helpers) => Promise.resolve(10)
}])
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

function testAsync(params, helpers) {
    console.log(params);
    return Promise.resolve({count: 1});
}

// export default Home;
export default connect(
    state => ({count: state.counter.count}),
    {increment, getCount}
)(Home);
