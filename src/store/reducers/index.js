import { combineReducers } from 'redux';

// Importing reducers
import loading from './loading'
import auth from './auth'
import bars from './bars'
import error from './error'

// Merging reducers
const reducers = combineReducers({
    loading,
    auth,
    bars,
    error
})

// Exporting merged reducer
export default reducers