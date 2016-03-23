import {CALL_API} from 'redux-api-middleware';

const initialState = {
    count: 0
};
const apiPrefix = '/api';

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_SUCCESS:
            return {
                count: action.payload.count
            };
            break;

        case GET_COUNT_SUCCESS: 
            return {
                count: action.payload.count
            };
            break;
        
        default:
            return state;
            
    }

}

export const INCREMENT_REQUEST = 'INCREMENT_REQUEST';
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';
export const INCREMENT_FAIL = 'INCREMENT_FAIL';

// export function increment() {
//     return {
//         type: INCREMENT
//     };
// }

export function increment() {
    return {
        [CALL_API]: {
            endpoint: `${apiPrefix}/count`,
            method: 'POST',
            types: [
                INCREMENT_REQUEST,
                {
                    type: INCREMENT_SUCCESS,
                    payload(action, state, res) {
                        return res.json();
                    }
                },
                {
                    type: INCREMENT_FAIL,
                    meta(action, state, res) {
                        console.log(res);
                    }
                }
            ]
        }
    };
}

export const GET_COUNT_REQUEST = 'GET_COUNT_REQUEST';
export const GET_COUNT_SUCCESS = 'GET_COUNT_SUCCESS';
export const GET_COUNT_FAIL = 'GET_COUNT_FAIL';

export function getCount() {
    return {
        [CALL_API]: {
            endpoint: `${apiPrefix}/count`,
            method: 'GET',
            types: [
                GET_COUNT_REQUEST,
                {
                    type: GET_COUNT_SUCCESS,
                    payload(action, state, res) {
                        return res.json();
                    }
                },
                {
                    type: GET_COUNT_FAIL,
                    meta(action, state, res) {
                        console.log(res);
                    }
                }
            ]
        }
    };
}
