import staticData from '../../cart-items'

// Actions
const CLEAR_CARD = 'shopping-cart-app/shopping-cart/CLEAR_CARD';
const REMOVE_ITEM = 'shopping-cart-app/shopping-cart/REMOVE_ITEM';


// State
const initialState = {
    cardItems: staticData,
    total: 0,
    amount: 9,
}
// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case CLEAR_CARD:
            return {...state, cardItems: []}
        case REMOVE_ITEM:
            return {...state, cardItems: state.cardItems.filter(item => item.id !== action.payload )}
        default: return state;
    }
}

// Action Creators
export function clearCard() {
    return { type: CLEAR_CARD };
}

export function removeItem(id) {
    return { type: REMOVE_ITEM, payload: id };
}