import actionTypes from './actionTypes'
import { combineReducers } from 'redux'

const logged = (state = {logged: false, user: null}, action) => {
    switch (action.type) {
        case LOGIN || LOGOUT:
            return action.payload
        default:
            return state
    }
}

const reducers = combineReducers({
    logged
  })
  
  export default reducers