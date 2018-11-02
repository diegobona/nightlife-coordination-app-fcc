import { ERROR } from '../actionTypes'

import * as alert from '../../helpers/sweetalert'

const errors = (err) => {
    switch(err) {
        case 'LOCATION_NOT_FOUND':
            alert.LOCATION_NOT_FOUND()
        default:
            return ''
    }
}

const error = (state = '', action) => {
    console.log('reducer error')
    switch (action.type) {
        case ERROR:
            errors(action.payload)
            return action.payload
        default:
            return ''
    }
}

export default error