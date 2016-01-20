import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Count from './Count.jsx';

import 'font-awesome-webpack';

let $wrap = document.getElementById('wrapper');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.store.getState().count,
            unsubscribe: null 
        };
    }

    componentWillMount() {
        let self = this;
        const {store} = this.props;

        let unsubscribe = store.subscribe(() => {
            const count = store.getState().count;
            
            self.setState({
                count,
                unsubscribe
            });
        });
    }

    componentWilUnmount() {
        const { unsubscribe } = this.state;

        unsubscribe();
    }
    
    render() {
        const {store: {dispatch}} = this.props;
        const {count} = this.state;

        return (
            <div className='app'>
                <Count count={count} dispatch={dispatch}/>
            </div>
        );
    }
}

ReactDOM.render(<App store={store} />, $wrap);
