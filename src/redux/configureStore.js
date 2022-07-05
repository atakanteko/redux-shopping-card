import {configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from "./ducks/shopping-card";

const store = configureStore({
    reducer: {
        shoppingCartReducer
    }
})

export default store;