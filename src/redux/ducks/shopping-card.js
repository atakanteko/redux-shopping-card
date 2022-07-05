import staticData from '../../cart-items'

// Actions
const CLEAR_CARD = 'shopping-cart-app/shopping-cart/CLEAR_CARD';


// State
const initialState = {
    cardItems: staticData,
    total: 0,
    amount: 9,
}
// Reducer
export default function reducer(state= initialState, action = {}) {
    switch (action.type) {
        case CLEAR_CARD:
            return {...state, cardItems: []}
        default: return state;
    }
}

// Action Creators
export function clearCard() {
    return { type: CLEAR_CARD };
}
