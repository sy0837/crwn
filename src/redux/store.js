import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root.reducer'
import { persistStore } from 'redux-persist'
// import thunk from 'redux-thunk'
import CreateSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
import rootSaga from './root.sagas'

const sagaMiddleware= CreateSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store) //to create storage of the data  
