const initialState = {
    count: 0
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
            break;
        
        default:
            return state;
            
    }

}

export const INCREMENT = 'INCREMENT';
export function increment() {
    return {
        type: INCREMENT
    };
}
