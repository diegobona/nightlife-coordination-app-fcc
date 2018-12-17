import { ERROR } from '../actionTypes'

import * as alert from '../../helpers/sweetalert'

const errors = ({ error, text }) => {
    switch(error) {
        case 'LOCATION_NOT_FOUND':
            alert.LOCATION_NOT_FOUND()
            break
        case 'CONNECTION_ERROR':
            alert.CONNECTION_ERROR()
            break
        case 'LOGIN_ERROR':
            alert.FETCH_LOGIN_ERROR(text)
            break
        case 'invalidUsername':
        case 'hashError':
        case 'invalidPassword':
            alert.LOGIN_ERROR(text)
            break
        case 'checkPassword':
            alert.CHECK_PASSWORD(text)
            break
        case 'checkUsername':
            alert.CHECK_USERNAME(text)
            break
        case 'logged':
            alert.LOGGED()
            break
        case 'taken':
            alert.TAKEN()
            break
        default:
            return
    }
}

const error = (state = { error: '', text: '' }, action) => {
    switch (action.type) {
        case ERROR:
            errors(action.payload)
            return action.payload
        default:
            return state
    }
}

export default error