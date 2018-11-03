import actionTypes from './actionTypes'
import parseBarList from '../helpers/parseBar'

import { batchActions } from 'redux-batched-actions'

// Loading indicator
export const loading = (bool) => (
  { type: actionTypes.LOADING, payload: bool }
)

// Authentication
export const showLoginForm = (bool) => (
  { type: actionTypes.SHOW_LOGIN_FORM, payload: bool }
)

export const login = (id) => (
  { type: actionTypes.LOGIN, payload: {logged: true, user: id} }
)

export const logout = () => (
  { type: actionTypes.LOGOUT, payload: {logged: false, user: null} }
)

export const checkUser = () => dispatch => {
  dispatch(loading(true))

  fetch('/user/auth')
  .then(response => {
    if (response.status !== 200) {  
      return Promise.reject('Authentication failed') 
    }
    return response.json()
  })
  .then(data => {
    // localStorage.setItem('user', JSON.stringify(data))
    dispatch(batchActions([!!data.user ? login(data.user._id) : logout(), loading(false)]))
    return data
  })
}

// Bars
export const setBars = (bars, location) => (
  { type: actionTypes.BARS, payload: { bars, location } }
)

export const getBars = location => dispatch => {
  dispatch(loading(true))
  
  fetch('/bar?location=' + location)  
  .then(response => {  
      // response jest instancją interfejsu Response
      if (response.status !== 200) {
          return Promise.reject('Zapytanie się nie powiodło');  
      }

      // zwracamy obiekt typu Promise zwracający dane w postaci JSON
      return response.json()
  })
  .then(data => {
    if (data.statusCode == 400) {
      dispatch(batchActions([setBars([], location), loading(false), error('LOCATION_NOT_FOUND')]))
    } else {
      localStorage.setItem('location', location)
      dispatch(batchActions([setBars(parseBarList(data), location), loading(false), error('')]))
    }
  })
  .catch(err => {
    console.log(err)
  })
}

// Error
export const error = (error) => (
  { type: actionTypes.ERROR, payload: error }
)