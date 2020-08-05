import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import CartReducer from './cart/cart.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'



//To  store the Cart State into Storage
const persistConfig={
    key: 'root',
    storage,
    Whitelist: ['cart']
}

// To integrate all the reducer to state and use in components
const rootReducer= combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})
export default persistReducer(persistConfig, rootReducer)