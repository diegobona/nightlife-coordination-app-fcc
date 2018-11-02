import { LOGIN, LOGOUT } from '../actionTypes'

const logged = (state = {logged: false, user: null}, action) => {
    switch (action.type) {
        case LOGIN || LOGOUT:
            return action.payload
        default:
            return state
    }
}

export default logged