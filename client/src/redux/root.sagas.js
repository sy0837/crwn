import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSaga } from "./cart/cart.sagas";

export default function* rootSaga() {
    // yield console.log("Root Saga logged");
    yield all([call(shopSagas),call(userSagas), call(cartSaga)])
}