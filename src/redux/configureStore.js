import {configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from "./ducks/shopping-card";

const store = configureStore({
    reducer: {
        shoppingCard:shoppingCartReducer
    }
})

export default store;