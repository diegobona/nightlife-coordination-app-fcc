import { BARS } from '../actionTypes'

const bars = (state = { bars: [], location: '' }, action) => {
    switch (action.type) {
        case BARS:
            return action.payload
        default:
            return state
    }
}

export default bars