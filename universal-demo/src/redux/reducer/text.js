import {CALL_API} from 'redux-api-middleware';
import conf from '../../conf.js';

export default function text(state = '', action) {
    switch (action.type) {
        case GET_TEXT_SUCCESS:
            return action.payload.text; 
            break;
        
        default:
            return state; 
    }
}

const apiPrefix = global.__CLIENT__ ? '/api' : `${conf.host}:${conf.serverPort}/api`;

const GET_TEXT_REQUEST = 'GET_TEXT_REQUEST';
const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
const GET_TEXT_FAIL = 'GET_TEXT_FAIL';

export function getText() {
    return {
        [CALL_API]: {
            method: 'GET',
            endpoint: `${apiPrefix}/text`,
            types: [
                GET_TEXT_REQUEST,
                {
                    type: GET_TEXT_SUCCESS,
                    payload(action, state, res) {
                        return res.json();
                    }
                },
                {
                    type: GET_TEXT_FAIL,
                    meta(action, state, res) {
                        console.log(res);
                    }
                }
            ]
        }
    };
}
