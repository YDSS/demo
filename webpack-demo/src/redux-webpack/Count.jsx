import React, {Component} from 'react';

class Count extends Component {

    onClick(ev) {
        let {dispatch} = this.props;        
        dispatch(countAction());
    }

    render() {
        const { count } = this.props;

        return (
            <div className='count'>
                <i className='fa fa-github' 
                    style={{marginRight: 10}}></i>
                <span onClick={this.onClick.bind(this)}>{count.number}</span>
            </div>
        );
    }
}

export default Count;

function countAction() {
    return {
        type: 'COUNT'
    };
}
