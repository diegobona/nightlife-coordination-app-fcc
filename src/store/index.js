import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { enableBatching } from 'redux-batched-actions'
import reducers from './reducers'


const store = createStore(enableBatching(reducers), applyMiddleware(thunk))

// Hot reloading reducers
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextReducers = require('./reducers').default
        store.replaceReducer(nextReducers)
    })
}

export default store