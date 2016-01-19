import React, {Component} from 'react';

class Count extends Component {

    onClick(ev) {
        let {store: {dispatch}} = this.props;        
        dispatch(countAction());
    }

    render() {
        const {store} = this.props;
        return (
            <div onClick={this.onClick.bind(this)}>{store.count.number}</div>
        );
    }
}

export default Count;

function countAction() {
    return {
        type: 'COUNT'
    };
}
