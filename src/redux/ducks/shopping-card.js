import staticData from '../../cart-items'

// Actions
const CLEAR_CARD = 'shopping-cart-app/shopping-cart/CLEAR_CARD';
const REMOVE_ITEM = 'shopping-cart-app/shopping-cart/REMOVE_ITEM';
const INCREASE_ITEM = 'shopping-cart-app/shopping-cart/INCREASE_ITEM';
const DECREASE_ITEM = 'shopping-cart-app/shopping-cart/DECREASE_ITEM';

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
        case INCREASE_ITEM:
            let tempCardInc = state.cardItems.map(item => {
                if (item.id === action.payload) {
                    item = {...item, amount: item.amount + 1}
                }
                return item
            })
            return {...state, cardItems: tempCardInc}
        case DECREASE_ITEM:
            let tempCardDec = []
            if (action.payload.amount === 1) {
                tempCardDec = state.cardItems.filter(item => item.id !== action.payload.id)
            } else {
                tempCardDec = state.cardItems.map(item => {
                    if (item.id === action.payload.id) {
                        item = {...item, amount: item.amount - 1}
                    }
                    return item
                })
            }
            return {...state, cardItems: tempCardDec}
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

export function increaseItem(id) {
    return { type: INCREASE_ITEM, payload: id };
}

export function decreaseItem(data) {
    return { type: DECREASE_ITEM, payload: data };
}