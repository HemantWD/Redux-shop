// Here we combine all the reducers also known as root reducers

import cartReducer from "./cart";
import isCartOpenReducer from "./isCartOpen";
import productsReducer from "./products";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    isCartOpen:isCartOpenReducer,
    products:productsReducer,
    cart:cartReducer
})

export default rootReducer;