import React, {Component} from 'react';
import {asyncConnect} from 'redux-async-connect';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Counter from '../component/Counter.jsx';
import Text from '../component/Text.jsx';
import {increment, getCount} from '../redux/reducer/counter';
import {getText} from '../redux/reducer/text';

@asyncConnect([{
    // count: testAsync
    //count: (params, helpers) => Promise.resolve(10)
    promise: ({store: {dispatch}}) => {
        console.log('count');
        return dispatch(getCount())
            .then(() => {
                return dispatch(getText());   
            });
    }
}])
@connect(
    state => ({count: state.counter.count, text: state.text}),
    {increment}
)
class Home extends Component {

    // componentWillMount() {
    //     const {getCount} = this.props;

    //     getCount();
    // }

    render() {
        const {count, increment, text} = this.props;

        return (
            <div className='home'>
                <Link to='/about'>ABOUT</Link> 
                <br />
                <Counter count={count} increment={increment}/>
                <Text text={text}/>
            </div>
        );
    }
}

export default Home;
