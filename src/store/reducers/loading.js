import { LOADING } from '../actionTypes'

const loading = (state = true, action) => {
    if (action.type == LOADING) return action.payload
    else return state
}

export default loading