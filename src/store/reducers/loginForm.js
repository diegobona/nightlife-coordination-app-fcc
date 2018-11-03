import { SHOW_LOGIN_FORM } from '../actionTypes'

const showLoginForm = (state = false, action) => {
    console.log('showing login form')
    if (action.type == SHOW_LOGIN_FORM) return action.payload
    else return state
}

export default showLoginForm