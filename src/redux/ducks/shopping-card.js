import staticData from '../../cart-items'

// Actions
const LOAD   = 'my-app/widgets/LOAD';


// State
const initialState = {
    card: staticData,
    total: 0,
    amount: 0,
}
// Reducer
export default function reducer(state= initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        default: return state;
    }
}

// Action Creators
export function loadWidgets() {
    return { type: LOAD };
}