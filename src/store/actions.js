import actionTypes from './actionTypes'

// const sweetalert = require('sweetalert')

// Authentication
exports.login = (id) => (
  { type: actionTypes.LOGIN, payload: {logged: true, user: id} }
)

exports.logout = () => (
  { type: actionTypes.LOGOUT, payload: {logged: false, user: null} }
)

exports.setBars = (bars) => (
    { type: actionTypes.BARS, payload: bars}
)

exports.getBars = ( location ) => (dispatch) => {

}