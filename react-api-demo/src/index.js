import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    render() { 
        let el = React.createElement('div', {name: 'ydss'}, 'hi there');

        return (
            <div className='app'>
                <el />
            </div>
        );
    }
}

const $wrap = document.getElementById('wrap');

ReactDOM.render(<App />, $wrap);
